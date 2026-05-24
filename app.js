        const exercises = [
            {
                type: "email",
                content: {
                    from: "seguridad@banco-santander.com",
                    subject: "Urgente: Actualice su información de seguridad",
                    body: "Estimado cliente,\n\nHemos detectado actividad sospechosa en su cuenta. Por favor, haga clic en el enlace a continuación para verificar su identidad:\n\nhttp://banco-santander-verificacion.tk/login\n\nTiene 24 horas para completar este proceso o su cuenta será suspendida.\n\nAtentamente,\nEquipo de Seguridad"
                },
                isPhishing: true,
                explanation: "Dominio sospechoso (.tk), urgencia artificial, amenaza de suspensión, y enlace que no va al sitio oficial del banco."
            },
            {
                type: "email",
                content: {
                    from: "noreply@netflix.com",
                    subject: "Tu factura de Netflix",
                    body: "Hola,\n\nTu factura mensual de Netflix está disponible. Puedes revisarla en tu cuenta o descargar el PDF adjunto.\n\nGracias por ser suscriptor de Netflix.\n\nEquipo de Netflix"
                },
                isPhishing: false,
                explanation: "Email legítimo: dominio oficial, sin urgencia, sin enlaces sospechosos, información estándar de facturación."
            },
            {
                type: "email",
                content: {
                    from: "microsoft-security@outlook.com",
                    subject: "¡Felicidades! Has ganado $1,000,000",
                    body: "¡FELICIDADES!\n\nHas sido seleccionado para recibir $1,000,000 en nuestra lotería internacional de Microsoft.\n\nPara reclamar tu premio, envía los siguientes datos:\n- Nombre completo\n- Número de documento\n- Número de cuenta bancaria\n\nResponde INMEDIATAMENTE para no perder tu premio."
                },
                isPhishing: true,
                explanation: "Premio falso, solicita información personal sensible, presión por respuesta inmediata, Microsoft no hace loterías."
            },
            {
                type: "email",
                content: {
                    from: "admin@miempresa.com",
                    subject: "Cambio de contraseña del sistema",
                    body: "Estimado colaborador,\n\nInformamos que el sistema de gestión tendrá mantenimiento este fin de semana. No es necesario realizar ninguna acción.\n\nLos cambios entrarán en vigor el lunes.\n\nIT Support"
                },
                isPhishing: false,
                explanation: "Email interno legítimo: informa sobre mantenimiento, no solicita acciones del usuario, no tiene enlaces sospechosos."
            },
            {
                type: "email",
                content: {
                    from: "support@paypal.com",
                    subject: "Verificación de cuenta requerida",
                    body: "Su cuenta de PayPal ha sido limitada debido a actividad inusual.\n\nPara restaurar el acceso, haga clic aquí: http://paypal-verification.net/restore\n\nIngrese su usuario, contraseña y número de tarjeta para verificar su identidad.\n\nEste proceso debe completarse en 48 horas."
                },
                isPhishing: true,
                explanation: "Dominio falso (paypal-verification.net), solicita credenciales y datos de tarjeta, presión temporal, amenaza de limitación."
            },
            {
                type: "email",
                content: {
                    from: "team@slack.com",
                    subject: "Nuevo mensaje en tu workspace",
                    body: "Tienes 3 mensajes nuevos en tu workspace 'Equipo Desarrollo'.\n\nAbrir Slack\n\nSi no deseas recibir estas notificaciones, puedes configurarlas desde tu perfil."
                },
                isPhishing: false,
                explanation: "Email legítimo: notificación estándar de la aplicación, dominio oficial, opción de cancelar notificaciones."
            },
            {
                type: "email",
                content: {
                    from: "security@amazon.com",
                    subject: "Inicio de sesión desde nuevo dispositivo",
                    body: "Hola,\n\nDetectamos un nuevo inicio de sesión en tu cuenta desde:\n- Dispositivo: iPhone\n- Ubicación: Bogotá, Colombia\n- Fecha: 4 de julio, 2025\n\nSi no fuiste tú, cambia tu contraseña inmediatamente.\n\nEquipo de Seguridad de Amazon"
                },
                isPhishing: false,
                explanation: "Alerta legítima de seguridad: informa sobre actividad real, dominio oficial, no solicita datos personales."
            },
            {
                type: "email",
                content: {
                    from: "no-reply@apple.com",
                    subject: "Su Apple ID ha sido deshabilitado",
                    body: "Su Apple ID ha sido deshabilitado por violación de términos de servicio.\n\nPara reactivarlo, debe verificar su identidad haciendo clic aquí:\nhttp://apple-id-verification.com/unlock\n\nProporcione su ID, contraseña y respuestas de seguridad.\n\nTiene 24 horas antes de que se elimine permanentemente."
                },
                isPhishing: true,
                explanation: "Dominio falso, amenaza de eliminación, solicita credenciales completas, presión temporal extrema."
            },
            {
                type: "email",
                content: {
                    from: "receipts@uber.com",
                    subject: "Recibo de tu viaje",
                    body: "Gracias por viajar con Uber.\n\nViaje: Casa - Oficina\nFecha: 4 de julio, 2025\nTotal: $15,000 COP\n\nPuedes ver los detalles completos en la app de Uber.\n\nGracias por elegirnos."
                },
                isPhishing: false,
                explanation: "Recibo legítimo: dominio oficial, información específica del viaje, no solicita acciones adicionales."
            },
            {
                type: "email",
                content: {
                    from: "admin@gobierno.co",
                    subject: "Reembolso tributario pendiente",
                    body: "Estimado contribuyente,\n\nTiene un reembolso tributario de $2,450,000 COP pendiente.\n\nPara procesarlo, complete el formulario en:\nhttp://reembolso-tributario.tk/form\n\nIngrese su número de cédula, datos bancarios y declare sus ingresos.\n\nProceso válido hasta mañana."
                },
                isPhishing: true,
                explanation: "Dominio sospechoso (.tk), solicita información financiera sensible, reembolso no solicitado, urgencia artificial."
            }
        ];

        let currentExercise = 0;
        let score = 0;
        let incorrectAnswers = [];

        function loadExercise() {
            const exercise = exercises[currentExercise];
            const counter = document.getElementById('counter');
            const exerciseDiv = document.getElementById('exercise');
            const progress = document.getElementById('progress');

            counter.textContent = `Pregunta ${currentExercise + 1} de ${exercises.length}`;
            progress.style.width = `${((currentExercise) / exercises.length) * 100}%`;

            if (exercise.type === "email") {
                exerciseDiv.innerHTML = "";

                const header = document.createElement("div");
                header.className = "email-header";

                const fromLabel = document.createElement("strong");
                fromLabel.textContent = "De: ";
                header.appendChild(fromLabel);
                header.appendChild(document.createTextNode(exercise.content.from));
                header.appendChild(document.createElement("br"));

                const subjectLabel = document.createElement("strong");
                subjectLabel.textContent = "Asunto: ";
                header.appendChild(subjectLabel);
                header.appendChild(document.createTextNode(exercise.content.subject));

                const content = document.createElement("div");
                content.className = "email-content";

                exercise.content.body.split("\n").forEach((line, index, array) => {
                    content.appendChild(document.createTextNode(line));
                    if (index < array.length - 1) {
                        content.appendChild(document.createElement("br"));
                    }
                });

                exerciseDiv.appendChild(header);
                exerciseDiv.appendChild(content);
            }
        }

        function answer(userAnswer) {
            const exercise = exercises[currentExercise];
            const isCorrect = userAnswer === exercise.isPhishing;

            if (isCorrect) {
                score++;
            } else {
                incorrectAnswers.push({
                    question: currentExercise + 1,
                    exercise: exercise,
                    userAnswer: userAnswer
                });
            }

            currentExercise++;

            if (currentExercise < exercises.length) {
                loadExercise();
            } else {
                showResults();
            }
        }

        function showResults() {
            document.getElementById('quiz-screen').classList.add('hidden');
            document.getElementById('result-screen').classList.remove('hidden');

            const resultTitle = document.getElementById('result-title');
            const scoreDiv = document.getElementById('score');
            const celebration = document.getElementById('celebration');
            const feedback = document.getElementById('feedback');

            scoreDiv.textContent = `${score}/${exercises.length}`;

            if (score === exercises.length) {
                celebration.textContent = "🎉🏆🎉";
                resultTitle.textContent = "¡Excelente! ¡Eres un experto en detectar phishing!";
                scoreDiv.className = "score perfect";

                feedback.innerHTML = "";
                const perfectContainer = document.createElement("div");
                perfectContainer.style.background = "#d4edda";
                perfectContainer.style.border = "1px solid #c3e6cb";
                perfectContainer.style.borderRadius = "10px";
                perfectContainer.style.padding = "20px";
                perfectContainer.style.color = "#155724";

                const title = document.createElement("h3");
                title.textContent = "🎯 ¡Puntuación Perfecta!";
                perfectContainer.appendChild(title);

                const p1 = document.createElement("p");
                p1.textContent = "Has demostrado excelentes habilidades para identificar intentos de phishing. Continúa aplicando estos conocimientos para proteger tu información personal y la de tu organización.";
                perfectContainer.appendChild(p1);

                const p2 = document.createElement("p");
                const strongHabits = document.createElement("strong");
                strongHabits.textContent = "Sigue estos hábitos:";
                p2.appendChild(strongHabits);
                perfectContainer.appendChild(p2);

                const ul = document.createElement("ul");
                const habits = [
                    "Siempre verifica los dominios de los remitentes",
                    "Desconfía de la urgencia artificial",
                    "Nunca proporciones información personal por email",
                    "Usa autenticación de dos factores cuando sea posible"
                ];
                habits.forEach(habit => {
                    const li = document.createElement("li");
                    li.textContent = habit;
                    ul.appendChild(li);
                });
                perfectContainer.appendChild(ul);
                feedback.appendChild(perfectContainer);

            } else if (score >= 7) {
                celebration.textContent = "👏";
                resultTitle.textContent = "¡Muy bien! Tienes buenos conocimientos";
                scoreDiv.className = "score good";
                feedback.innerHTML = "";
                feedback.appendChild(generateFeedback());
            } else {
                celebration.textContent = "📚";
                resultTitle.textContent = "Necesitas reforzar algunos conceptos";
                scoreDiv.className = "score needs-improvement";
                feedback.innerHTML = "";
                feedback.appendChild(generateFeedback());
            }
        }

        function generateFeedback() {
            if (incorrectAnswers.length === 0) return document.createDocumentFragment();

            const container = document.createElement("div");
            container.className = "feedback";

            const title = document.createElement("h3");
            title.textContent = "📋 Áreas a reforzar:";
            container.appendChild(title);

            const p = document.createElement("p");
            p.textContent = "Revisa estos conceptos para mejorar tu detección de phishing:";
            container.appendChild(p);

            const ul = document.createElement("ul");

            const topics = new Set();
            incorrectAnswers.forEach(item => {
                const exercise = item.exercise;
                if (exercise.isPhishing && !item.userAnswer) {
                    topics.add("Identificación de dominios sospechosos");
                    topics.add("Detección de urgencia artificial");
                    topics.add("Reconocimiento de solicitudes de información personal");
                }
                if (!exercise.isPhishing && item.userAnswer) {
                    topics.add("Diferenciación entre emails legítimos y sospechosos");
                    topics.add("Verificación de fuentes confiables");
                }
            });

            topics.forEach(topic => {
                const li = document.createElement("li");
                li.textContent = topic;
                ul.appendChild(li);
            });

            container.appendChild(ul);

            const tip = document.createElement("p");
            const strongTip = document.createElement("strong");
            strongTip.textContent = "Tip: ";
            tip.appendChild(strongTip);
            tip.appendChild(document.createTextNode("Cuando dudes, siempre verifica directamente con la organización a través de sus canales oficiales."));
            container.appendChild(tip);

            return container;
        }

        function restartQuiz() {
            currentExercise = 0;
            score = 0;
            incorrectAnswers = [];

            document.getElementById('result-screen').classList.add('hidden');
            document.getElementById('quiz-screen').classList.remove('hidden');

            loadExercise();
        }

        // Add event listeners for buttons
        document.addEventListener("DOMContentLoaded", () => {
            const btnPhishing = document.getElementById("btn-phishing");
            const btnLegitimate = document.getElementById("btn-legitimate");
            const btnRestart = document.getElementById("restart-btn");

            if (btnPhishing) {
                btnPhishing.addEventListener("click", () => answer(true));
            }
            if (btnLegitimate) {
                btnLegitimate.addEventListener("click", () => answer(false));
            }
            if (btnRestart) {
                btnRestart.addEventListener("click", restartQuiz);
            }

            // Inicializar la aplicación
            loadExercise();
        });
