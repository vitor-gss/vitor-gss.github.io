async function saveLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const fileName = 'login_data.txt'; // Nome fixo do arquivo

    const fileContent = `Username: ${username}\nPassword: ${password}`;

    try {
        if (navigator.userAgent.includes("Chrome")) {
            // Use a API File System para Chrome
            const directoryHandle = await window.showDirectoryPicker();
            const fileHandle = await directoryHandle.getFileHandle(fileName, { create: true });
            const writable = await fileHandle.createWritable();
            await writable.write(fileContent);
            await writable.close();

            alert('Dados de login salvos com sucesso!');
        } else {
            // Fallback para download, pode não funcionar em todos os navegadores
            const blob = new Blob([fileContent], { type: 'text/plain' });
            const link = document.createElement('a');
            link.href = window.URL.createObjectURL(blob);
            link.download = fileName;
            link.click();

            alert('Dados de login salvos com sucesso!');
        }
    } catch (error) {
        console.error('Erro ao salvar os dados:', error);
    }
}