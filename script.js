const validUsers = {
    "seagal.falcaov": { nome: "Seagal - 48352", ID: "<@1234551482091831378>" },
    "light.falcao": { nome: "Light Silvestre - 21813", ID: "<@1202276721257357419>" },
    "adrian.b": { nome: "Adrian B - 49657", ID: "<@691419782016139285>" },
    "tenebroso.s": { nome: "TENEBROSO S - 1859", ID: "<@787855152152707122>" },
    "isadora.d": { nome: "Isadora D - 1481", ID: "<@1024213090465759264>" },
    "azzy.d": { nome: "Azzy D - 56117", ID: "<@1134990551368867900>" },
    "miguel.v": { nome: "Miguel V - 330", ID: "<@924073746032103484>" },
    "big.m": { nome: "Big M - 6772", ID: "<@1230941062714101891>" },
    "henrick.o": { nome: "Henrick O - 33662", ID: "<@1071061246222274640>" },
    "pamusa.b": { nome: "Pamusa B - 13265", ID: "<@1239402226133241896>" },
    "sabotage.v": { nome: "Sabotage V - 22481", ID: "<@1298892018306777110>" },
    "surdin.a": { nome: "Surdin A - 833", ID: "<@667515195224096778>" },
    "calzone.b": { nome: "Calzone B - 1687", ID: "<@855132370582765569>" },
    "joao.m": { nome: "Joao M - 10837", ID: "<@1056338029968642101>" },
    "murillo.d": { nome: "Murillo D - 24499", ID: "<@819602205052239975>" },
    "gustavo.a": { nome: "Gustavo A - 28220", ID: "<@805298000754507806>" },
    "bigode.r": { nome: "Bigode R - 57781", ID: "<@1270100972802277427>" },
    "claudinho.d": { nome: "Claudinho D - 8064", ID: "<@1083803156380651671>" },
    "dell.d": { nome: "Dell D - 59043", ID: "<@424653747533250560>" },
    "heitor.f": { nome: "Heitor F - 11222", ID: "<@801133517098188801>" },
    "box.d": { nome: "Box D - 1683", ID: "<@1196874409219203123>" },
    "joao.p": { nome: "Joao P - 33665", ID: "<@854053225555951636>" },
    "matheus.n": { nome: "Matheus N - 17219", ID: "<@1021006569388908605>" },
    "lucas.o": { nome: "Lucas O - 57015", ID: "<@592098862374715392>" },
    "gustavoantunes.g": { nome: "Gustavoantunes G - 44474", ID: "<@928863315642417203>" },
    "big.j": { nome: "Big J - 23526", ID: "<@938421991873060874>" },
    "kevin.t": { nome: "Kevin T - 13485", ID: "<@692407609814286468>" },
    "rick.m": { nome: "Rick M - 35089", ID: "<@1035398989186613339>" },
    "dingy.r": { nome: "Dingy R - 32744", ID: "<@547067059629195267>" },
    "nick.g": { nome: "Nick G - 59367", ID: "<@59367>" },
    "ghostt.x": { nome: "Ghostt X - 55774", ID: "<@1267242925029589022>" },
    "lucas.s": { nome: "Lucas S - 48802", ID: "<@1215322512984903701>" },
    "tutu.f": { nome: "Tutu F - 14913", ID: "<@750099942856720454>" },
    "silva.s": { nome: "Silva S - 59611", ID: "<@59611>" },
    "kael.s": { nome: "Kael S - 969", ID: "<@1055485382139060235>" },
    "phzin.p": { nome: "Phzin P - 56746", ID: "<@1064681751554830426>" },
    "cruz.a": { nome: "Cruz A - 41980", ID: "<@41980>" },
    "thiago.d": { nome: "Thiago D - 34432", ID: "<@690739357211951196>" },
    "pedro.p": { nome: "Pedro P - 3398", ID: "<@458118845954129933>" },
    "luan.m": { nome: "Luan M - 1530", ID: "<@438861988626432001>" },
    "brayan.t": { nome: "Brayan T - 54771", ID: "<@1115756572858130583>" },
    "edinaldo.s": { nome: "Edinaldo S - 52444", ID: "<@1231302344831012907>" },
    "victor.s": { nome: "Victor S - 976", ID: "<@977673362006474793>" },
    "felipe.b": { nome: "Felipe B - 44782", ID: "<@927357292142268467>" },
    "kauan.r": { nome: "Kauan R - 654", ID: "<@1170753595063406625>" },
    "igor.k": { nome: "Igor K - 6312", ID: "<@6312>" },
    "krattos.m": { nome: "KRATTOS M - 15395", ID: "<@740180527981658192>" },
    "eduzn.m": { nome: "Eduzn M - 15291", ID: "<@1067913892648460341>" },
    "rafael.l": { nome: "Rafael L - 695", ID: "<@869979186545168418>" },
    "pedroo.s": { nome: "Pedroo S - 6848", ID: "<@811377872668590100>" },
    "jorge.f": { nome: "Jorge F - 16051", ID: "<@622236937197060129>" },
    "renato.r": { nome: "Renato R - 2209", ID: "<@1055558345383219252>" },
    "bakk.m": { nome: "Bakk M - 58339", ID: "<@1014527350815342704>" },
    "juarez.b": { nome: "Juarez B - 59569", ID: "<@59569>" },
    "anderson.c": { nome: "Anderson C - 38743", ID: "<@38743>" },
    "gabri.g": { nome: "Gabri G - 758", ID: "<@1279160425203765451>" },
    "careca.t": { nome: "Careca T - 58939", ID: "<@58939>" },
    "richard.g": { nome: "Richard G - 57250", ID: "<@1206779354592583703>" },
    "samuel.m": { nome: "Samuel M - 3891", ID: "<@694593384878440448>" },
    "berlim.l": { nome: "Berlim L - 4674", ID: "<@648691530835689502>" },
    "bruno.g": { nome: "Bruno G - 13973", ID: "<@13973>" },
    "leno.t": { nome: "Leno T - 11852", ID: "<@1286463940989288581>" },
    "thiago.a": { nome: "Thiago A - 509", ID: "<@804020985464488006>" },
    "danike.m": { nome: "DaNike M - 1248", ID: "<@1248>" }
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
      messageElement.textContent = "Registro de Pontuação em processamento. Por favor, aguarde...";
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
    `<a:trofeu:1318291077886902322> **Registro de Pontuação <a:trofeu:1318291077886902322>**\n- **Nome:** *${Nome}*\n- **Discord:** *${loggedInUser}*\n- **Link:**\n> **${Arquivo ? Arquivo : ""}**\n- **Materiais:** ${
      materiais.length > 0
        ? "\n> " + materiais.map((material) => "" + material).join("\n> ")
        : ""
    }\n <@&1317715184193638481>` 
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

    function logout() {
        loggedInUser = null;
        document.getElementById('loginForm').style.display = 'block';
        document.getElementById('formContainer').style.display = 'none';
    }
    

  
