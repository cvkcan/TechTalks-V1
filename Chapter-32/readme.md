#   Bölüm - 32


*   Secure bağlantıları HTTPS ile gerçekleştiririz.
*   HTTPS web browser ve server arasındaki trafiği şifreleyen bir protokoldur.
*   HTTPS TLS (Transport Layer Security) protokolunu kullanmaktadır.
*   Kodu değiştirmez, key şifreler ve sertifika kullanır.
*   package.json içerisinde scripts alanında ssl true yapmamız gerekmektedir ve ilgili parametreleri eklemeyiliz.
*   --ssl=true --ssl-key=./ssl-localhost/localhost.key --ssl-cert=./ssl-localhost/localhost.crt => ssl trye ile ssl modu açtık, ssl-key ile key', ssl-cert ile de sertifikayı vermiş olduk.
