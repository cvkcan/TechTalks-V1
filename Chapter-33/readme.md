#   Bölüm - 33


*   Keytool'u çalıştırabilmek için sistem değişkenlerine Keytool'un bulunduğu klasörü vermeliyiz.
*   keytool -genkeypair -alias luv2code -keystore src/main/resources/luv2code-keystore.p12 -keypass secret -storeType PKCS12 -storepass secret -keyalg RSA -keysize 2048 -validity 365 -dname "C=US, ST=Pennsylvania, L=Philadelphia, O=luv2code, OU=Training Backend, CN=localhost" -ext "SAN=dns:localhost" => sertifika ve key oluşturulur.
*   keytool -list -v -alias luv2code -keystore src/main/resources/luv2code-keystore.p12 -storepass secret => içeriğine bakılabilir.
*   server.port=8443, server.ssl.enabled=true, server.ssl.key-alias=luv2code, server.ssl.key-store=classpath:luv2code-keystore.p12, server.ssl.key-store-password=secret, server.ssl.key-store-type=PKCS12 kodlarını application.properties dosyasına ekleriz.
*   self signed sertifikalarda connection is not private uyarısı alınır. Sebebi sertifikanın başka bir doğrulayıcısının olmamsıdır.
