{
    "name": "symfony/polyfill-mbstring",
    "type": "library",
    "description": "Symfony polyfill for the Mbstring extension",
    "keywords": ["polyfill", "shim", "compatibility", "portable", "mbstring"],
    "homepage": "https://symfony.com",
    "license": "MIT",
    "authors": [
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
    "provide": {
        "ext-mbstring": "*"
    },
    "autoload": {
        "psr-4": { "Symfony\\Polyfill\\Mbstring\\": "" },
        "files": [ "bootstrap.php" ]
    },
    "suggest": {
        "ext-mbstring": "For best performance"
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
