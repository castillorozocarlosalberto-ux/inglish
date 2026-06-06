
        let currentLanguage = 'en'; // El juego arranca en inglés por defecto
        let currentSceneKey = 'welcome';

        const storyData = {
            welcome: {
                title: { en: "The Crystal Golem", es: "El Golem de Cristal" },
                text: { 
                    en: "Welcome to a mystical adventure in the Clockwork Kingdom. The system core is in grave danger, and your logical skills are its only salvation.<br><br>Are you ready to unlock ancient rune secrets and assist the realm?", 
                    es: "Bienvenido a una aventura mística en el Reino de los Engranajes. El sistema central corre peligro y tus conocimientos de lógica serán la única salvación.<br><br>¿Estás listo para descubrir los secretos de las runas antiguas y ayudar al reino?" 
                },
                type: "welcome",
                options: [
                    { text: { en: "⚡ START ADVENTURE", es: "⚡ INICIAR AVENTURA" }, next: "start", class: "btn-start" }
                ]
            },
            start: {
                title: { en: "The Diagnostics", es: "El Diagnóstico" },
                text: { 
                    en: "The Great Clock Tower is glitching! Dark cosmic code is corrupting the grid, and the defense shields are dropping rapidly. Princess Aria looks at the system runes and gasps: \"We need to resolve this loop immediately, Kael!\"", 
                    es: "¡La Gran Torre del Reloj está fallando! Una magia oscura está corrompiendo la red de cristal y los escudos de defensa del reino están cayendo rápidamente. La princesa Aria observa las runas del sistema y se alarma: \"¡Necesitamos resolver este bucle inmediatamente, Kael!\"" 
                },
                type: "normal",
                options: [
                    { text: { en: "Try to PATCH the old shield script temporarily.", es: "Intentar aplicar un PATCH (parche) temporal al viejo hechizo del escudo." }, next: "error_patch" },
                    { text: { en: "Deploy diagnostics to DEBUG the core spell logic.", es: "Ejecutar diagnósticos para hacer DEBUG (depurar) a la lógica central del hechizo." }, next: "step_2" }
                ]
            },
            error_patch: {
                title: { en: "Compilation Error", es: "Error de Compilación" },
                text: { 
                    en: "CRITICAL FAILURE! The dark magic is too deep. The temporary patch instantly breaks, and the corruption spreads faster, alerting the shadow entities. Your defenses are destroyed.", 
                    es: "¡FALLO CRÍTICO! La magia oscura es demasiado profunda. El parche temporal se rompe instantáneamente y la corrupción se propaga más rápido, alertando a las entidades de las sombras. Tus defensas han sido destruidas." 
                },
                type: "error",
                options: [
                    { text: { en: "🔄 REBOOT SYSTEM / TRY AGAIN", es: "🔄 REINICIAR SISTEMA / INTENTAR DE NUEVO" }, next: "start" }
                ]
            },
            step_2: {
                title: { en: "Refactoring the Magic", es: "Refactorizando la Magia" },
                text: { 
                    en: "SUCCESS! Aria isolates the broken code. \"We must <span class='keyword blue'>REFACTOR</span> the entire incantation,\" she says. Kael runs to the lower sectors to <span class='keyword purple'>FETCH</span> clean ether-crystals. When he returns, they carry some dark energy residue.", 
                    es: "¡ÉXITO! Aria logra aislar el código dañado. \"No podemos limitarnos a emparchar, debemos <span class='keyword blue'>REFACTOR</span> (refactorizar/rehacer) el encantamiento completo\", dice ella. Kael corre a los sectores subterráneos para <span class='keyword purple'>FETCH</span> (traer/obtener) cristales de éter puros. Al regresar, nota que los cristales traen un residuo de energía oscura." 
                },
                type: "normal",
                options: [
                    { text: { en: "Inject the raw crystals directly into the magic generator.", es: "Inyectar los cristales brutos directamente en el generador mágico." }, next: "error_raw" },
                    { text: { en: "SANITIZE the input crystals to remove dark residue first.", es: "Aplicar un SANITIZE (limpiar) a los cristales para eliminar el residuo oscuro primero." }, next: "step_3" }
                ]
            },
            error_raw: {
                title: { en: "Infected Input Error", es: "Error de Entrada Corrupta" },
                text: { 
                    en: "STACK OVERFLOW! The raw crystals were infected. The generator's input buffer overflows, causing a magical explosion that shuts down the entire laboratory.", 
                    es: "¡STACK OVERFLOW! Los cristales brutos estaban infectados. El búfer de entrada del generador se desborda, causando una explosión mágica que apaga por completo todo el laboratorio de runas." 
                },
                type: "error",
                options: [
                    { text: { en: "🔄 REBOOT SYSTEM / TRY AGAIN", es: "🔄 REINICIAR SISTEMA / INTENTAR DE NUEVO" }, next: "step_2" }
                ]
            },
            step_3: {
                title: { en: "The Instantiation", es: "La Instanciación" },
                text: { 
                    en: "DATA CLEANSED! Aria purifies the energy stream. She begins to <span class='keyword blue'>DECLARE</span> the spiritual variables and <span class='keyword blue'>DEFINE</span> the safe pathways on her glowing desk. She raises her wand to <span class='keyword green'>INSTANTIATE</span> a massive Crystal Golem!<br><br>Suddenly, a pack of Corrupted Shadow Wolves has bypassed the gates!", 
                    es: "¡DATOS LIMPIOS! Aria purifica el flujo de energía. En su mesa de trabajo resplandeciente, comienza a <span class='keyword blue'>DECLARE</span> (declarar) las variables espirituales y a <span class='keyword blue'>DEFINE</span> (definir) los caminos seguros. ¡Levanta su varita y logra <span class='keyword green'>INSTANTIATE</span> (instanciar/dar vida) a un enorme Golem de Cristal!<br><br>¡De repente, las alarmas del taller se activan! Una manada de Lobos de Sombra Corruptos ha burlado la entrada." 
                },
                type: "normal",
                options: [
                    { text: { en: "INVOKE a standard static firewall spell around the workshop.", es: "INVOKE (invocar) un hechizo de firewall estático estándar alrededor del taller." }, next: "error_firewall" },
                    { text: { en: "MOCK the Golem's network signature to create an illusionary decoy.", es: "Hacer un MOCK (simular) de la firma energética del Golem para crear un señuelo ilusorio." }, next: "win" }
                ]
            },
            error_firewall: {
                title: { en: "Security Breach", es: "Brecha de Seguridad" },
                text: { 
                    en: "ACCESS DENIED! The shadow wolves are too advanced and leap right over the firewall. The workshop is completely compromised before the Golem can act.", 
                    es: "¡ACCESO DENEGADO! Los lobos de sombra son demasiado avanzados y saltan directamente sobre el firewall estático. El taller queda completamente comprometido antes de que el Golem pueda reaccionar." 
                },
                type: "error",
                options: [
                    { text: { en: "🔄 REBOOT SYSTEM / TRY AGAIN", es: "🔄 REINICIAR SISTEMA / INTENTAR DE NUEVO" }, next: "step_3" }
                ]
            },
            win: {
                title: { en: "Deployment Successful", es: "Despliegue Exitoso" },
                text: { 
                    en: "CRITICAL HIT! Aria builds an illusionary packet. The wolves chase the false signature blindly. \"Now, <span class='keyword green'>DEPLOY</span> the real Golem!\" Kael shouts. The real Golem marches out and shatters the shadows.<br><br>Aria connects the crystal to the tower. \"Let's <span class='keyword purple'>COMMIT</span> these changes to the master branch,\" she smiles. System status: OPTIMAL.", 
                    es: "¡IMPACTO CRÍTICO! Aria construye un paquete de ilusión. Los lobos persiguen la firma falsa a ciegas. \"¡Ahora, <span class='keyword green'>DEPLOY</span> (desplegar) al verdadero Golem!\", grita Kael. El Golem real marcha y destroza a las sombras.<br><br>Aria conecta el cristal purificado al núcleo de la torre. \"Vamos a <span class='keyword purple'>COMMIT</span> (confirmar/guardar) estos cambios en la red eterna\", sonríe. ¡El reino está a salvo! Estado del sistema: ÓPTIMO." 
                },
                type: "success",
                options: [
                    { text: { en: "🌌 RUN NEW LOOP / PLAY AGAIN", es: "🌌 REEJECTUAR BUCLE / JUGAR DE NUEVO" }, next: "welcome" }
                ]
            }
        };

        // Función para mezclar/aleatorizar las opciones de respuesta
        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        }

        function toggleLanguage() {
            currentLanguage = (currentLanguage === 'en') ? 'es' : 'en';
            renderScene(currentSceneKey, false); // Actualiza la pantalla actual sin volver a barajar los botones
        }

        function renderScene(sceneKey, shouldShuffle = true) {
            currentSceneKey = sceneKey;
            const scene = storyData[sceneKey];
            const container = document.getElementById('game-box');
            
            container.className = "game-container";
            if(scene.type === "error") container.classList.add('state-error');
            if(scene.type === "success") container.classList.add('state-success');

            // Setear textos según idioma activo
            document.getElementById('game-title').innerText = scene.title[currentLanguage];
            document.getElementById('game-text').innerHTML = scene.text[currentLanguage];

            const optionsContainer = document.getElementById('game-options');
            optionsContainer.innerHTML = "";
            
            // Barajar los botones solo si venimos de una transición de pantalla real
            let optionsList = [...scene.options];
            if (shouldShuffle && optionsList.length > 1) {
                optionsList = shuffleArray(optionsList);
            }

            optionsList.forEach(opt => {
                const btn = document.createElement('button');
                btn.innerHTML = opt.text[currentLanguage];
                
                if (opt.class) {
                    btn.classList.add(opt.class);
                }
                
                btn.onclick = () => renderScene(opt.next, true);
                optionsContainer.appendChild(btn);
            });
        }

        // Inicializar
        renderScene('welcome', true);
   