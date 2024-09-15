#   Bölüm - 34


*   URL'ler hard code yerine environment bazlı özelleştirerek verilmelidir.
*   Bunun için angular configure edilmelidir.
*   Development ortamında çalışıldığı için const değerlerimizi environment.development dosyamızı göstermeliyiz.
*   angular.json dosyası üzerinde environment tanımlayabilmekteyiz.
*   projects> project-name > architect > build > configurations içerisinde environment tanımlamalıyız.
*   projects> project-name > architect > build > serve içerisinde de tanımlama yapılmalıdır.
*   serve içerisinde buildTarget tanımlaması yapılmalıdır. browserTarger deprecated. 
*   production ortamında uygulamanın davranışları değişmektedir.
*   Otomatik yenileme kontrolünü devre dışı bırakır, mesajlar azalır, scripts ve styles minimalize edilir, dead code ortadan kaldırılır, performans optimizasyonu, kritik css ve fontları devreye alma gibi işlevleri etkin kılar.
*   Uygulamayı çalıştırırken --configuration parametresini vermeliyiz. npm start --configuration=qa
*   Eğitim sırasında yukarıdaki kod çalışmıştır. Fakat environment qa'yi görmemektedir. Bu sebeple package.json dosyasına aşağıdaki kod eklenmiştir.
*   "start:qa": "ng serve --configuration=qa --ssl=true --ssl-key=./ssl-localhost/localhost.key --ssl-cert=./ssl-localhost/localhost.crt"
*   QA ortamını çalıştırabilmek için npm run start:qa yazılmalıdır. Dev ortamı için npm start denilmesi yeterlidir.