*   Real-Time E-Commerce Uygulaması yapacağız.
*   JPA Mapping kullanılmaktadır.
*   @ManyToOne, @OneToMany kullanılacaktırç
*   Lombok getter-setter üretir.
*   Annotation uygulanması kolaydır.
*   @Data annotation ile Lombok getter-setter üretir.
*   @CreationTimestamp Hibernate tarafında otomatik olarak date üretir.
*   @JoinColumn ile ilişki kurulan alan belirtilir.
*   @RepositoryRestResource annotation'da collectionResourceRel parametresi JSON formatında, path kısmı ise kullandığımız sınıf.
*   Read-only yapmak istiyorsak Spring Data REST kullanmayabiliriz. 
*   Bunun yerine kendi @RestController'larımızı yazıp @GetMapping yapabiliriz.
*   Ya da yetkilendirmeler ile metodları kullanıcıların yetkilerine göre kısıtlayabiliriz.
*   Bu aşamada sadece devre dışı bırakacağız.
 