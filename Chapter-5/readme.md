
# Bölüm - 5

*   Class yapısında property, constructor, getter-setter metodları bulunmaktadır.
-   Modifier ve Definition
    -   public => her yerden erişilebilir
    -   protected => mevcuttaki class ya da türeyen sınıflardan
    -   private => sadece kullanıldığı class'tan
*   tsc --noEmitOnError ile hatalı JS oluşturulmasını önlemiş oluruz.
*   get firstName, set firstName şeklinde getter-setter tanımlanabilir.
*   Erişim belirleyicileri yoksa publictir.
*   Ayarlamaları her seferinde manuel yapmaktansa **tsconfig.ts** içerisinde tanımlamalar yaparak tsc komutunu çalıştırdığımızda ayarlarımıza göre proje ayağa kalkar
*   tsc --init ile otomatik olarak *tsconfig.ts* dosyasını oluştururuz.
*   Class içerisinde property tanımlamadan **Constructor'ın** parametresine erişim belirteçleri ile yazarak propertyleri tanımlanmış oluruz.
*   Sınıflar *export ve import edilebilir.*
*    export class ile yapılan tanımlamalarda import edilirken { } içerisinde tanımlamalar yapılır
*   Class normal tanımlanıp, export default className şeklinde yapılan export işleminde ise import özelliği import className şeklindedir.
