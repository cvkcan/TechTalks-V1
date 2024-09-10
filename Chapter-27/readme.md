#   Bölüm - 27


*   Verileri Web Stroage API'lerde tutarız.
*   Cookie'lere benzer.
*   Key/Value bazlı çalışır. Verileri browser'da tutar.
*   Session ve Local Storage olmak üzere iki türdür.
*   Session Storage => Web browser'da veriler tutulut. Http isteği yollamaz. Browser tab'ları arasında veri paylaşılmaz. Tab kapatılırsa verilere erişilemez.
*   Local Storage => Client side computer'da tutulur. Veriler sunucuya gitmez. Farklı tab'lardan ve aynı origin tarafından erişilebilir. Tarayıcı yenilendiği zaman veriler tekrar okunur. Expiration date yoktur. Verileri silmek için JS ya da browser cache temizlenir. Tarayıcılar arasında veriler paylaşılmaz.
*   Web Storage API session ya da local storage için kullanılanbilir.
*   Key Value temellidir ve bunlar String'tir.
*   storage.setItem, storage.getItem
*   
