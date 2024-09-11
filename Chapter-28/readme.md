#   Bölüm - 28


*   Spring Data REST'te farklı tespit stratejileri vardır.
*   ALL => Java görünürlüğü veya ek açıklama yapılandırmasından bağımsız olarak tüm Spring Data depolarını açığa çıkarır.
*   DEFAULT => @RepositoryRestResource ile açıkça açıklanan veya public (genel erişime açık) Spring Data depolarını açığa çıkarır ve exported özelliği false olarak ayarlanmamış olmalıdır.
*   VISIBILITY => 	Açıklama yapılandırmasından bağımsız olarak yalnızca public (genel erişime açık) Spring Data depolarını açığa çıkarır.
*   ANNOTATED => 	@RepositoryRestResource ile açıkça açıklanan Spring Data depolarını açığa çıkarır ve exported özelliği false olarak ayarlanmamış olmalıdır.
*   application.properties içerisine tanımladığımız **spring.data.rest.detection-strategy=annotated** varsayılan olarak annotated olarak gelmektedir.