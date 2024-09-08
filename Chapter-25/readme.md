#   Bölüm - 25


*   Authentication => Kullanıcının, uygulamanın iddaa ettikleri kişi olup olmadığını kontrol eder.
*   Authorization => Sisteme giriş yapan kullanıcıların yetkilerine göre çeşitli ekranlara, fonksiyonlara erişme durumudur.
*   OAuth 2 => Kullanıcının limitler doğrultusunda çeşitli kaynaklarına erişme durumuna sahip frameworktur. Auhtorization işlemidir.
*   OpenID Connect => OAuth 2'nin üstünde bir kimlik katmanıdır. Authentication işlemidir.
*   JWT => Kimlik doğrulama ve yetkilendirme için kullanılır. JSON tabanlıdır. Verileri taşırken şifrelenmiş ve imzalanmıştır.
*    JWT içeriğinde Header, Payload, Signature bulunur.
*   Header'da imzalama algoritması ve token türü, Payload'da kullanıcı verileri, Signature ise tokenin bütünlüğünü korumasını sağlar.
*   Okta => Bulut tabanlı yetkilendirme sunucusu sağlar. Widget vasıtasıyla Authentication işlemi gerçekleşir ve uygulamamızı açarız. Sosyal medya üzerinden login desteği bulunmaktadır. Yetkilendirme konusunda Role-based ve API Access yetkilendirme yapabilmektedir. Kullanıcı yönetiminde ise admin paneli ve policy bazlı görevlendirme yapar. OAuth2, OpenID Connect, JWT desteği vardır. 1000 kullanıcıya kadar developer hesap desteği sunmaktalar.
*   PKCE = Proof Key for Code Exchange
*   PKCE'yi yetkilendirmede kullanırız. Auth ile uygulama arasındaki kontrol yaklaşımınıdır. Auth Code için araya girme saldırılarına karşı korur. Konsepti dinamik gizliliklerdir. Kodumuzu doğrular.
*   oidc => (OpenID Connect) protokolü üzerinden kimlik doğrulama yapılır.
*   clientId => Okta'nın hangi uygulamanın kimlik doğrulama talebinde bulunduğunu anlamasına olanak sağlar.
*   issuer => kimlik doğrulama işlemi sırasında token'ları sağlayan ve doğrulayan yerin adresidir.
*   redirectUrl => Kimlik doğrulama işlemi tamamlandıktan sonra Okta, kullanıcının tarayıcısını geri döndürmek için bu URL'yi kullanır.
*    scopes => uygulamanızın hangi bilgilere (yetkilere) erişmek istediğini belirtir. 
*   openid: OpenID Connect için gerekli olan kapsam. Kimlik doğrulama işleminin OIDC üzerinden yapılmasını sağlar.
*   profile: Kullanıcının profil bilgilerine (örneğin, isim, soy isim gibi) erişim izni verir.
*   email: Kullanıcının e-posta adresine erişim izni sağlar.
*   PKCE true olması istenen değerdir.
