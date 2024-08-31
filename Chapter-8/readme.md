
# Bölüm - 8

*   Kullanacağımız Bootstrap içeren html dosyamızın path'ini templateUrl'deki yere yazarız.
*   *ngIf="" ile durumsal html'ler yazarız.
*    *ngIf="durum; else elseSonrasiKosul" deriz.
*   <ng-template #elseSonrasiKosul>else için  yazılacak html</ng-template>
*   Yukarıdaki yapıyı div içersinde yazarız. Kosullarımıza göre özellestirme yapılabilir.
*   ngFor ve ngIf cok kullanılır
*   ngSwitch, ngStyle gibi kullanılanları da dokumantasyondan bakabilir.
*   CurrencyPipe da kullanılabilir, sadece formatlama yapar, dönüştürme yapmaz.
*   [ngStyle] ile duruma göre style verebiliyoruz.
*   [ngStyle]="{'background-color': tmepSalesPerson.salesVolume >= 50003 ? 'green' : 'red'}"
*   [ngClass] ile de farklı durumlara göre yer aldığı tag'deki className değiştirilip, istenilen class'a göre işlem yapılabilmesini sağlamaktadır.
*   [ngClass]="{
            'highlight-true': tmepSalesPerson.salesVolume >= 500003,
            'highlight-false': tmepSalesPerson.salesVolume < 500003}"