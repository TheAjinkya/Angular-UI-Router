app.config(function($stateProvider, $urlRouterProvider, $locationProvider){

    $urlRouterProvider.otherwise("/home")

    $stateProvider
        .state('home', {
        'url': '/home',
        
        templateUrl : 'home.html'

    })

        .state('home.addition', {
        'url': '/home/addition',
        templateUrl : 'addition.html'

    })
    
    .state('home.subtraction',{
        url : '/home/subtraction',
        templateUrl : 'subtraction.html'
    })

        .state('about', {
        'url': '/about',
        templateUrl : 'about.html'

    })

        .state('product', {
        'url': '/product',
        templateUrl : 'product.html'

    })

        .state('contact', {
        'url': '/contact',
        templateUrl : 'contact.html'

    })
    
    $locationProvider.hashPrefix('');
    $locationProvider.html5Mode(true);
    

})