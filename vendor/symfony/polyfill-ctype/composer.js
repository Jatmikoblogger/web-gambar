{
    "name": "symfony/polyfill-ctype",
    "type": "library",
    "description": "Symfony polyfill for ctype functions",
    "keywords": ["polyfill", "compatibility", "portable", "ctype"],
    "homepage": "https://symfony.com",
    "license": "MIT",
    "authors": [
        {
            "name": "Gert de Pagter",
            "email": "BackEndTea@gmail.com"
        },
        {
            "name": "Symfony Community",
            "homepage": "https://symfony.com/contributors"
        }
    ],
    "require": {
        "php": ">=7.1"
    },
    "provide": {
        "ext-ctype": "*"
    },
    "autoload": {
        "psr-4": { "Symfony\\Polyfill\\Ctype\\": "" },
        "files": [ "bootstrap.php" ]
    },
    "suggest": {
        "ext-ctype": "For best performance"
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
