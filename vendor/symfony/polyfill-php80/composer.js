{
    "name": "symfony/polyfill-php80",
    "type": "library",
    "description": "Symfony polyfill backporting some PHP 8.0+ features to lower PHP versions",
    "keywords": ["polyfill", "shim", "compatibility", "portable"],
    "homepage": "https://symfony.com",
    "license": "MIT",
    "authors": [
        {
            "name": "Ion Bazan",
            "email": "ion.bazan@gmail.com"
        },
        {
            "name": "Nicolas Grekas",
            "email": "p@tchwork.com"
        },
        {
            "name": "Symfony Community",
            "homepage": "https://symfony.com/contributors"
        }
    ],
    "require": {
        "php": ">=7.1"
    },
    "autoload": {
        "psr-4": { "Symfony\\Polyfill\\Php80\\": "" },
        "files": [ "bootstrap.php" ],
        "classmap": [ "Resources/stubs" ]
    },
    "minimum-stability": "dev",
    "extra": {
        "branch-alias": {
            "dev-main": "1.26-dev"
        },
        "thanks": {
            "name": "symfony/polyfill",
            "url": "https://github.com/symfony/polyfill"
        }
    }
}
