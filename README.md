## DIGITAL BOOKING HOTELS
 #### Digital Booking Hotels es un producto que se desarrolló pensando en los usuarios que necesitaban organizarse al momento de realizar sus viajes vacacionales o de negocios, ofreciéndoles a través de un clic variedad de alojamientos con diversas comodidades, al mismo tiempo permitiendo a los dueños de las propiedades poder hacer visibles sus servicios
 
> ## **¿De qué trata el proyecto?**
>
> </div> Es una plataforma en línea que permite a los usuarios buscar y reservar habitaciones en Hoteles, Hostels, Departamentos y Bed and Break Fast en distintas ciudades de Argentina y Colombia. La plataforma puede ofrecer una variedad de características y funcionalidades, como la búsqueda por fechas disponibles, ciudad y categoría, la visualización de imágenes y descripciones detalladas de las propiedades. Además, el proyecto ofrece un sistema de gestión de reservas para los propietarios de las propiedades, que les permite gestionar sus listados, recibir y gestionar reservas.

> ## **¿Cuál es su objetivo principal?**
>
> Facilitar la búsqueda, la reserva y la gestión de alojamientos. La plataforma permite a los clientes encontrar y reservar habitaciones en las distintas categorías disponibles, lo que les ahorra tiempo y esfuerzo en la búsqueda de un lugar donde alojarse. Para los propietarios, el proyecto les brinda una herramienta valiosa para gestionar sus listados, recibir y gestionar reservas, lo que les permite aumentar su visibilidad y aumentar su rentabilidad. En fin, Digital Booking Hotels persigue ofrecer una solución sencilla y eficiente para la búsqueda y la gestión de alojamientos en línea.

>
> ## **Tecnologías utilizadas**
>
> **- _Front end:_**
>
> * [HTML.](https://developer.mozilla.org/es/docs/Web/HTML)
> * [CSS.](https://developer.mozilla.org/es/docs/Web/CSS)
> * [JavaScript.](https://developer.mozilla.org/es/docs/Web/JavaScript)
> * [React Js.](https://es.reactjs.org/)
>
> **- _Back end:_**
>
> * [Java.](https://www.java.com/es/)
> * [Springboot.](https://spring.io/projects/spring-boot)
> * [Hibernate.](https://hibernate.org/orm/documentation/6.1/)
>
> **_- API:_**
>
> * [Rest.](https://aws.amazon.com/es/what-is/restful-api/)
> * [JSON.](https://developer.mozilla.org/es/docs/Learn/JavaScript/Objects/JSON)
>
> **- _Base de datos:_**
>
> * [MySQL.](https://www.mysql.com/)
> * [MySQL Workbench.](https://www.mysql.com/products/workbench/)
>
> **_- Testing:_**
>
> * [Postman.](https://www.postman.com/)
> * [Selenium IDE.](https://www.selenium.dev/selenium-ide/)
>
> **_- Infraestructura:_**
>
> * [AWS EC2.](https://aws.amazon.com/es/ec2/)
> * [AWS S3.](https://aws.amazon.com/es/s3/)
> * [AWS VPC.](https://aws.amazon.com/es/vpc/)
> * [Docker.](https://www.docker.com/)
> * [Docker registry.](https://docs.docker.com/registry/)
> * [Gitlab CI/CD pipeline.](https://docs.gitlab.com/ee/ci/pipelines/)
> * Shell script.
>
> **- Gestión:**
>
> * <span dir="">IDEs : </span>[<span dir="">Visual Studio Code</span>](https://code.visualstudio.com/)<span dir=""> + </span>[<span dir="">IntelliJ</span> IDEA](https://www.jetbrains.com/idea/).
> * <span dir="">Sistemas de control de versiones</span>: [Gitlab](https://about.gitlab.com/).
> * [Discord.](https://discord.com/)
> * [Zoom.](https://zoom.us/)
> * [Google Meet.](https://meet.google.com/)
>

> #### - Base de Datos:
>
> ---
>
> * **<span dir="">Diagrama de la base de datos:</span>**
>
> <span dir="">![](https://lh5.googleusercontent.com/mZU66tDuLDbe0xQoCe2MJynUxz1ddvlmPUfhuVqRJt39gEw7YSQYInkblK_gH0DB0G1hQG5Ot7YgwGZmnhuTW_15Z6fHe5swmad6Al1v-4fMASsPS_zM3F2lqIA3ocuj4ZBykkKvq5jSqsiYqVyThTgSmnmJjiq9TAUAUO1LoXHTomfNQJibGr60UuMU-w)</span>
>

> #### -Infraestructura:
>
> ---
>
> **<span dir="">Estructura y diagramas</span>:**
>
> <span dir="">El proyecto se montó sobre una infraestructura soportada en </span>[<span dir="">AWS</span>](https://aws.amazon.com/es/)<span dir=""> utilizando los siguientes componentes:</span>
>
> * <span dir="">_Bucket S3:_ Se implementaron dos bucket S3 uni para alojar las imágenes y otro configurado en modo hosting para servir el sitio web.</span>
> * <span dir="">_Instancia EC2:_ Se utilizó una instancia para servir de host al backend.</span>
> * <span dir="">_Base de datos MySQ:_ Se utilizó una instancia de MySQL para persistir los datos requeridos por la aplicación.</span>
> * <span dir="">_VPC:_ Se utilizó una VPC custom para realizar las configuraciones de red asociadas a los diferentes componentes del servicio.</span>
> * <span dir="">_Docker:_ Se utilizó docker para contenerizar el backend y así aprovechar las ventajas de aislamiento, portabilidad y compatibilidad con el CI/CD.</span>
>
>   ![image](uploads/31e4a5841b0e299e98f99afb8646aba4/image.png)
>
> **<span dir="">Pipeline de CI/CD</span>:** <span dir="">Se desarrolló un pipeline de CI/CD que permitió al equipo hacer entregas de forma constante y eficiente . El pipeline consta de las siguientes etapas:</span>
>
> * <span dir="">_Front Build:_ En esta etapa se realiza la compilación y el empaquetado del código del frontend, generando el artefacto que se desplegará en una etapa posterior.</span>
> * <span dir="">_Deploy front:_ En esta etapa se despliega el artefacto del frontend en la instancia S3.</span>
> * <span dir="">_Back build job:_ En esta etapa se compila el código de Java del backend y se empaqueta en un .jar que finalmente es el artefacto que desplegamos en una etapa posterior.</span>
> * <span dir="">_Back image build job:_ En esta etapa se realiza la construcción de la imagen Docker y se hace el push al registry privado.</span>
> * <span dir="">_Back deploy job:_ En esta etapa se realiza el pull de la imagen generada en el paso anterior y se despliega en el docker.</span>
>
> <span dir="">![](https://lh5.googleusercontent.com/HzMQgmYAhVnOr-4U85eqLdFB0xAfOatcbfhU6Z9BUh2eZPrqwKzOQ4WRH6pKrPLX0767yhs7YOrNEORtrJOQNO6IJe8UxAOGjuTxuqzqbikFFyXdJMX19gDRxS3c54CF0dLKXjHwV8m_pC-NTN4DEUKkAhGnqHMS4TNcjD7AJVqodzI0ZKqOd4TDYH7DEA)</span>
>
> #### -<span dir="">Testing y calidad</span>:
>
> ---
>
> <span dir="">Para cumplir con las expectativas y requerimientos establecidos realizamos pruebas, para asegurarnos de que nuestro producto cumpla con los requerimientos de calidad </span>necesarios. Por lo tanto incluimos el informe de detalle de testing:
>
> <https://docs.google.com/document/d/1dPo5lIXu7sjLJj6572LIuEnbQ44YDdgxTQG7uSS3C-k/edit?usp=sharing>
