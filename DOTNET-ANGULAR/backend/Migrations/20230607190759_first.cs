using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace nfcbackend.Migrations
{
    public partial class first : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterDatabase()
                .Annotation("MySQL:Charset", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "Suscriber",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "char(36)", nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "datetime(6)", nullable: true),
                    UpdatedAt = table.Column<DateTime>(type: "datetime(6)", nullable: true),
                    Discriminator = table.Column<string>(type: "longtext", nullable: false),
                    companyName = table.Column<string>(type: "longtext", nullable: true),
                    companyAddress = table.Column<string>(type: "longtext", nullable: true),
                    companyPhoneNumber = table.Column<string>(type: "longtext", nullable: true),
                    firstName = table.Column<string>(type: "longtext", nullable: true),
                    lastName = table.Column<string>(type: "longtext", nullable: true),
                    phoneNumber = table.Column<string>(type: "longtext", nullable: true),
                    address = table.Column<string>(type: "longtext", nullable: true),
                    birth = table.Column<DateTime>(type: "datetime(6)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Suscriber", x => x.Id);
                })
                .Annotation("MySQL:Charset", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "Accounts",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "char(36)", nullable: false),
                    accountType = table.Column<string>(type: "longtext", nullable: false),
                    mail = table.Column<string>(type: "varchar(150)", maxLength: 150, nullable: false),
                    password = table.Column<string>(type: "longtext", nullable: false),
                    isActive = table.Column<bool>(type: "tinyint(1)", nullable: false),
                    SuscriberId = table.Column<Guid>(type: "char(36)", nullable: false),
                    MaxProfileNumber = table.Column<int>(type: "int", nullable: true),
                    CurrentProfileNumber = table.Column<int>(type: "int", nullable: true),
                    CreatedAt = table.Column<DateTime>(type: "datetime(6)", nullable: true),
                    UpdatedAt = table.Column<DateTime>(type: "datetime(6)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Accounts", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Accounts_Suscriber_SuscriberId",
                        column: x => x.SuscriberId,
                        principalTable: "Suscriber",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                })
                .Annotation("MySQL:Charset", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "Profiles",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "char(36)", nullable: false),
                    IsActive = table.Column<bool>(type: "tinyint(1)", nullable: false),
                    TemplateIndex = table.Column<int>(type: "int", nullable: false),
                    FirstName = table.Column<string>(type: "longtext", nullable: false),
                    LastName = table.Column<string>(type: "longtext", nullable: false),
                    PhoneNumber = table.Column<string>(type: "longtext", nullable: false),
                    Adress = table.Column<string>(type: "longtext", nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "datetime(6)", nullable: false),
                    UpdateAt = table.Column<DateTime>(type: "datetime(6)", nullable: false),
                    AccountId = table.Column<Guid>(type: "char(36)", nullable: true),
                    ImagePath = table.Column<string>(type: "longtext", nullable: false),
                    Lattitude = table.Column<float>(type: "float", nullable: false),
                    Longitude = table.Column<float>(type: "float", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Profiles", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Profiles_Accounts_AccountId",
                        column: x => x.AccountId,
                        principalTable: "Accounts",
                        principalColumn: "Id");
                })
                .Annotation("MySQL:Charset", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "Cards",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "char(36)", nullable: false),
                    isActive = table.Column<bool>(type: "tinyint(1)", nullable: false),
                    ProfileId = table.Column<Guid>(type: "char(36)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Cards", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Cards_Profiles_ProfileId",
                        column: x => x.ProfileId,
                        principalTable: "Profiles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                })
                .Annotation("MySQL:Charset", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "Socials",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "char(36)", nullable: false),
                    socialPlatform = table.Column<string>(type: "longtext", nullable: false),
                    SocialUrl = table.Column<string>(type: "longtext", nullable: false),
                    ProfileId = table.Column<Guid>(type: "char(36)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Socials", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Socials_Profiles_ProfileId",
                        column: x => x.ProfileId,
                        principalTable: "Profiles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                })
                .Annotation("MySQL:Charset", "utf8mb4");

            migrationBuilder.CreateIndex(
                name: "IX_Accounts_mail",
                table: "Accounts",
                column: "mail",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Accounts_SuscriberId",
                table: "Accounts",
                column: "SuscriberId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Cards_ProfileId",
                table: "Cards",
                column: "ProfileId");

            migrationBuilder.CreateIndex(
                name: "IX_Profiles_AccountId",
                table: "Profiles",
                column: "AccountId");

            migrationBuilder.CreateIndex(
                name: "IX_Socials_ProfileId",
                table: "Socials",
                column: "ProfileId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Cards");

            migrationBuilder.DropTable(
                name: "Socials");

            migrationBuilder.DropTable(
                name: "Profiles");

            migrationBuilder.DropTable(
                name: "Accounts");

            migrationBuilder.DropTable(
                name: "Suscriber");
        }
    }
}
