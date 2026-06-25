# CleanTecPro Setup Script
# Run this in PowerShell from Desktop/cleantecpro folder
Write-Host "Creating CleanTecPro project files..." -ForegroundColor Green

# Create all directories
$dirs = @(
    "src/app/about",
    "src/app/admin",
    "src/app/amc",
    "src/app/api/auth/admin-login",
    "src/app/api/auth/login",
    "src/app/api/auth/register",
    "src/app/api/contact",
    "src/app/api/health",
    "src/app/api/orders",
    "src/app/api/quotes",
    "src/app/auth/login",
    "src/app/auth/register",
    "src/app/blog/[slug]",
    "src/app/booking",
    "src/app/cancellation",
    "src/app/contact",
    "src/app/dashboard",
    "src/app/faq",
    "src/app/locations/[emirate]/[city]",
    "src/app/privacy",
    "src/app/quote",
    "src/app/refund",
    "src/app/services/[categorySlug]/[subcategorySlug]/[serviceSlug]",
    "src/app/sitemap",
    "src/app/terms",
    "src/components/layout",
    "src/db",
    "src/lib"
)

foreach ($dir in $dirs) {
    New-Item -ItemType Directory -Path $dir -Force | Out-Null
}

Write-Host "Directories created!" -ForegroundColor Yellow
Write-Host "Now copy each file from the Arena chat preview." -ForegroundColor Yellow
Write-Host "Done creating folder structure!" -ForegroundColor Green
