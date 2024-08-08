using System;
using System.Collections.Generic;
using BackEnd.Model;
using Microsoft.EntityFrameworkCore;

namespace BackEnd.DAL.DataBaseContext;

public partial class DynatronContext : DbContext
{
    public DynatronContext()
    {
    }

    public DynatronContext(DbContextOptions<DynatronContext> options)
        : base(options)
    {
    }

    public virtual DbSet<DynatronCustomer> DynatronCustomers { get; set; }

    public virtual DbSet<DynatronUser> DynatronUsers { get; set; }

    public virtual DbSet<Menu> Menus { get; set; }

    public virtual DbSet<ProfileHasMenu> ProfileHasMenus { get; set; }

    public virtual DbSet<UserProfile> UserProfiles { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder) { }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<DynatronCustomer>(entity =>
        {
            entity.HasKey(e => e.CustomerId).HasName("PK_Customer");

            entity.ToTable("DynatronCustomer");

            entity.Property(e => e.CustomerId).HasColumnName("CustomerID");
            entity.Property(e => e.CreatedDate).HasColumnType("datetime");
            entity.Property(e => e.Email).HasMaxLength(30);
            entity.Property(e => e.FirstName).HasMaxLength(50);
            entity.Property(e => e.LastName).HasMaxLength(50);
            entity.Property(e => e.UpdatedDate).HasColumnType("datetime");
            entity.Property(e => e.UserId).HasColumnName("UserID");
        });

        modelBuilder.Entity<DynatronUser>(entity =>
        {
            entity.HasKey(e => e.UserId).HasName("PK_User");

            entity.ToTable("DynatronUser");

            entity.Property(e => e.UserId).HasColumnName("UserID");
            entity.Property(e => e.CustomerId).HasColumnName("CustomerID");
            entity.Property(e => e.ProfileId).HasColumnName("ProfileID");
            entity.Property(e => e.Pwd).HasMaxLength(20);
            entity.Property(e => e.UserName).HasMaxLength(30);
        });

        modelBuilder.Entity<Menu>(entity =>
        {
            entity.ToTable("Menu");

            entity.Property(e => e.MenuId).HasColumnName("MenuID");
            entity.Property(e => e.MenuIcon).HasMaxLength(50);
            entity.Property(e => e.MenuText).HasMaxLength(50);
        });

        modelBuilder.Entity<ProfileHasMenu>(entity =>
        {
            entity.HasKey(e => e.ProfileMenuId);

            entity.ToTable("Profile_Has_Menu");

            entity.Property(e => e.ProfileMenuId).HasColumnName("ProfileMenuID");
            entity.Property(e => e.MenuId).HasColumnName("MenuID");
            entity.Property(e => e.ProfileId).HasColumnName("ProfileID");
        });

        modelBuilder.Entity<UserProfile>(entity =>
        {
            entity.HasKey(e => e.ProfileId);

            entity.ToTable("UserProfile");

            entity.Property(e => e.ProfileId).HasColumnName("ProfileID");
            entity.Property(e => e.ProfileName).HasMaxLength(50);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
