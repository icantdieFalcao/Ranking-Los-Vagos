const validUsers = {
    "seagal.falcaov": { nome: "Seagal - 48352", ID: "<@1234551482091831378>" },
    "light.falcao": { nome: "Light Silvestre - 21813", ID: "<@1202276721257357419>" },
  };
  
  let loggedInUser = null; // Armazenar usuário logado
  
  document.getElementById("loginButton").addEventListener("click", function () {
    const loginInput = document.getElementById("login").value.trim().toLowerCase(); // Força minúsculas
    const user = validUsers[loginInput];
  
    if (user) {
      loggedInUser = `${user.ID}`; // Concatena nome e ID
      document.getElementById("loginForm").style.display = "none";
      document.getElementById("formContainer").style.display = "block"; // Mostra o formulário
      document.getElementById("loginErrorMessage").style.display = "none"; // Oculta a mensagem de erro
      document.getElementById('nome').value = user.nome; // Preenche o campo "Nome"
    } else {
      document.getElementById("loginErrorMessage").textContent =
        "Usuário não encontrado. Tente novamente.";
      document.getElementById("loginErrorMessage").style.display = "block"; // Mostra mensagem de erro
    }
  });
      
  function showFields() {
    var selectedCategories = Array.from(document.getElementById('categories').selectedOptions).map(option => option.value);
    var allFields = document.querySelectorAll('.hidden-fields');
  
    allFields.forEach(function(field) {
      field.style.display = 'none';
    });
  
    selectedCategories.forEach(function(category) {
      document.getElementById(category.replace(/\s/g, '') + '-fields').style.display = 'block';
    });
  }
  
      
  document
    .getElementById("form")
    .addEventListener("submit", async function (e) {
      e.preventDefault(); // Previne o envio padrão do formulário
  
      const imageUpload = document.getElementById('imageUpload');
      const linkInput = document.querySelector('textarea[name="Arquivo"]');
      const messageElement = document.getElementById("message");
  
      // Verifica se o link está vazio e se nenhuma imagem foi selecionada
      if (linkInput.value.trim() === '' && imageUpload.files.length === 0) {
        messageElement.textContent = 'Por favor, envie uma imagem ou insira um link.';
        messageElement.style.display = 'block'; // Mostra a mensagem
        messageElement.style.backgroundColor = '#FFCCCB'; // Cor de fundo para erro
        messageElement.style.color = '#000000'; // Cor do texto
        messageElement.style.textAlign = 'center'; // Centraliza o texto
        messageElement.scrollIntoView({ behavior: 'smooth' });
        return; // Impede o envio do formulário
      }
  
      messageElement.style.display = 'none'; // Esconde a mensagem se o formulário for válido
  
      document.getElementById("submit-button").disabled = true;
  
      // Coleta os dados do formulário
      var formData = new FormData(this);
      var keyValuePairs = [];
      for (var pair of formData.entries()) {
        keyValuePairs.push(pair[0] + "=" + pair[1]);
      }
  
      var formDataString = keyValuePairs.join("&");
  
      // Exibir a mensagem de "Enviando..."
      messageElement.textContent = "Relatório da Facção em processamento. Por favor, aguarde...";
      messageElement.style.display = "block";
      messageElement.style.backgroundColor = "#FFFFE0"; /* Amarelo */
      messageElement.style.color = "#000000"; /* Preto */
      messageElement.style.textAlign = 'center';
      messageElement.scrollIntoView({ behavior: 'smooth' });
  
      try {
        // Envia os dados para o Google Apps Script
        const response = await fetch(
          "https://script.google.com/macros/s/AKfycbw7fuNG62Fwdl9hB9XP9xdz_gSmCo_0HYVFmROHkbNZGBfF1KX8HdtqXyeWM_Awv4gO/exec",
          {
            redirect: "follow",
            method: "POST",
            body: formDataString,
            headers: {
              "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
            },
          }
        );
  
        if (!response.ok) {
          throw new Error("Falha ao enviar para o Google Apps Script");
        }
  
        // Coleta dados para enviar ao webhook do Discord
        const Nome = formData.get("Nome");
        const Arquivo = formData.get("Arquivo");
            const materiais = [];
              if (formData.get("ATM")) materiais.push(`ATM: ${formData.get("ATM")}`);
              if (formData.get("Lojinha")) materiais.push(`Lojinha: ${formData.get("Lojinha")}`);
              if (formData.get("Joalheira")) materiais.push(`Joalheira: ${formData.get("Joalheira")}`);
              if (formData.get("Entorpecentes")) materiais.push(`Entorpecentes: ${formData.get("Entorpecentes")}`);
              if (formData.get("Corrida")) materiais.push(`Corrida: ${formData.get("Corrida")}`);
              if (formData.get("Desmanche")) materiais.push(`Desmanche: ${formData.get("Desmanche")}`);
              if (formData.get("Presenca")) materiais.push(`Presença em ação: ${formData.get("Presenca")}`);
              if (formData.get("Missao")) materiais.push(`Missão Semanal: ${formData.get("Missao")}`);
              if (formData.get("Rotas")) materiais.push(`Rotas: ${formData.get("Rotas")}`);
  
        // Preparando os dados para o webhook do Discord
        const webhookURL =
          "https://discord.com/api/webhooks/1317710193949413466/YWZ_Cp08OOIApLI7kXQR-sxLEKiKeJ9hNUjOYwlZ1uDf9X8ZmNN0sEOmN38AV--UeYiU";
  const webhookData = new FormData();
  webhookData.append(
    "content",
    `📥 **Relatório da Facção**\n- **Nome:** *${Nome}*\n- **Discord:** *${loggedInUser}*\n- **Link:**\n> -# **${Arquivo ? Arquivo : ""}**\n- **Materiais:** ${
      materiais.length > 0
        ? "\n> " + materiais.map((material) => "-# " + material).join("\n> ")
        : ""
    }\n-# ||**Passo ciência;**  <@&1315073510028218440>||` 
  );
  
        // Adiciona as imagens (se fornecidas) como anexos ao webhook
        const imageFiles = document.getElementById("imageUpload").files;
        for (let i = 0; i < imageFiles.length; i++) {
          webhookData.append(`file${i}`, imageFiles[i]);
        }
  
        // Envia dados para o webhook do Discord
        const webhookResponse = await fetch(webhookURL, {
          method: "POST",
          body: webhookData,
        });
  
        if (!webhookResponse.ok) {
          throw new Error("Falha ao enviar. Possível que imagens são muito pesadas. Tente fazer o upload das imagens e utilizar o link.");
        }
  
        messageElement.textContent = "Relatório da Facção enviado com sucesso! Obrigado pela sua contribuição.";
        messageElement.style.backgroundColor = "#98FB98";
        messageElement.style.color = "#000000";
        messageElement.style.display = "block";
        messageElement.style.textAlign = 'center';
        messageElement.scrollIntoView({ behavior: 'smooth' });
  
        // Temporizador para esconder a mensagem após 3 segundos
        setTimeout(function () {
          messageElement.textContent = "";
          messageElement.style.display = "none";
        }, 3000);
  
        // Reinicia o formulário após o envio
      } catch (error) {
        messageElement.textContent = error.message;
        messageElement.style.backgroundColor = "#FFCCCB";
        messageElement.style.color = "#000000";
        messageElement.style.display = "block";
        messageElement.scrollIntoView({ behavior: 'smooth' });
  
  
        // Temporizador
        setTimeout(function () {
          messageElement.textContent = "";
          messageElement.style.display = "none";
        }, 10000);
      } finally {
        document.getElementById("submit-button").disabled = false; // Habilita o botão de enviar novamente
      }
    });

  
