#   Bölüm - 30


*   Okta spring boot entegrasyonu ile backend'de doğrulama sonrasında istek atılabilir durumdadır. Fakat okta tarafı çalışmadığı için bu adım varmış gibi davranılacaktır.
*   Java'da application.properties kısmına aşağıdaki tanımlamalar yapılır.
*   spring.security.oauth2.client.registration.okta.client-id={yourClientId}
*   spring.security.oauth2.client.provider.okta.issuer-uri=https://{yourOktaDomain}/oauth2/default
