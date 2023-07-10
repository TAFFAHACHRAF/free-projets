using Microsoft.EntityFrameworkCore;
using nfcbackend.Data;
using nfcbackend.Repositories;
using Microsoft.OpenApi.Models;
using nfcbackend.Services;
using Microsoft.AspNetCore.StaticFiles;
using Microsoft.Extensions.FileProviders;
using Microsoft.AspNetCore.Http.Features;
using System.Net;

var builder = WebApplication.CreateBuilder(args);



string apiName = "NFC";




builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<AppDbContext>(op => op.UseMySQL(builder.Configuration.GetConnectionString("default")));
builder.Services.AddScoped<ICardRepository, CardRepositoryImpl>();
builder.Services.AddScoped<ISocialRepository, SocialRepositoryImpl>();
builder.Services.AddScoped<IProfileRepository, ProfileRepositoryImpl>();
builder.Services.AddScoped(typeof(IRepository<>), typeof(RepositoryImpl<>));
builder.Services.AddScoped<IAccountRepository, AccountRepositoryImpl>();
builder.Services.AddScoped<IUserRepository, UserRepositoryImpl>();
builder.Services.AddScoped<ICompanyRepository, CompanyRepositoryImpl>();
builder.Services.AddScoped<IUserService, UserServiceImpl>();
builder.Services.AddScoped<ICompanyService, CompanyServiceImpl>();
builder.Services.AddScoped<IAccountService, AccountServiceImpl>();
builder.Services.AddScoped<ISocialService, SocialServiceImpl>();
builder.Services.AddScoped<ICardService, CardServiceImpl>();
builder.Services.AddScoped<IProfileService, ProfileServiceImpl>();
builder.Services.AddAutoMapper(typeof(Program).Assembly);
builder.Services.AddCors(option =>
{
    option.AddPolicy("MyPolicy", builder =>
    {
        builder.AllowAnyOrigin()
        .AllowAnyMethod()
        .AllowAnyHeader();

    });

});




builder.Services.AddControllers();


builder.Services.Configure<FormOptions>(options =>
{
    options.MultipartBodyLengthLimit = long.MaxValue; // Limite de taille maximale du corps multipart
});


builder.Services.AddSwaggerGen(c =>
{

    c.SwaggerDoc(apiName, new OpenApiInfo
    {
        Version = "v0",
        Title = "NFC_API",
    });
});




var app = builder.Build();





// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(c =>
    {
        c.SwaggerEndpoint("/swagger/" + apiName + "/swagger.json", " API v0");
    }); ;
}


app.UseHttpsRedirection();
app.UseCors("MyPolicy");

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();
