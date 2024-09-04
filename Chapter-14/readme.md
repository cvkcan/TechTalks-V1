#   Bölüm - 14


*   event'lere atanan fonksiyonlar aslında componentteki methodlarımızdır.
*   #myInput type="text"'deki (#) işareti ile value değerimize erişebilmekteyiz.
*   Angular tarafındaki methodun parametresinin value değerine erişmiş oluruz.
*   <input #myInput type="text" (keyup.enter)="componentMethod(myInput.value)"/>
*   <button (click)="componentMethod(myInput.value)"> Search </button>
*   Çeşitli event türleri mevcuttur ve buna göre işlemler yapılabilmektedir.
*   Örn doubleClick, hover gibi.
