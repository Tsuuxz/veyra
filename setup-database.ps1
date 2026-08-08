# VEYRA Database Setup Script
# Execute este script para configurar o banco de dados Supabase

$SUPABASE_URL = "https://twybklrffaisuawunwvi.supabase.co"
$SERVICE_ROLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR3eWJrbHJmZmFpc3Vhd3Vud3ZpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ0OTY3MzMsImV4cCI6MjA4MDA3MjczM30.Jb4vfyy3uJR8xGzu27K06D1dYMpGc6P2fND9j5aPd64"

Write-Host "==========================================" -ForegroundColor Cyan
Write-Host "VEYRA - Database Setup" -ForegroundColor Cyan
Write-Host "==========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "IMPORTANTE: Este script vai executar SQL_SETUP.sql no Supabase" -ForegroundColor Yellow
Write-Host ""
Write-Host "Passos manuais necessários:" -ForegroundColor Yellow
Write-Host "1. Acesse: https://supabase.com/dashboard/project/twybklrffaisuawunwvi/editor" -ForegroundColor White
Write-Host "2. Clique em 'SQL Editor'" -ForegroundColor White
Write-Host "3. Clique em 'New Query'" -ForegroundColor White
Write-Host "4. Copie todo o conteúdo de SQL_SETUP.sql" -ForegroundColor White
Write-Host "5. Cole no editor e clique em 'Run'" -ForegroundColor White
Write-Host ""
Write-Host "Ou execute cada tabela manualmente via REST API (mais complexo)" -ForegroundColor Yellow
Write-Host ""
Write-Host "Pressione qualquer tecla para abrir o SQL Editor do Supabase..." -ForegroundColor Green
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")

Start-Process "https://supabase.com/dashboard/project/twybklrffaisuawunwvi/editor"

Write-Host ""
Write-Host "SQL Editor aberto no navegador!" -ForegroundColor Green
Write-Host "Copie o conteúdo de SQL_SETUP.sql e execute no editor." -ForegroundColor Green
