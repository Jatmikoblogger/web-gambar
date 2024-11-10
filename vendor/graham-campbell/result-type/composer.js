{
    "name": "graham-campbell/result-type",
    "description": "An Implementation Of The Result Type",
    "keywords": ["result", "result-type", "Result", "Result Type", "Result-Type", "Graham Campbell", "GrahamCampbell"],
    "license": "MIT",
    "authors": [
        {
            "name": "Graham Campbell",
            "email": "hello@gjcampbell.co.uk",
            "homepage": "https://github.com/GrahamCampbell"
        }
    ],
    "require": {
        "php": "^7.2.5 || ^8.0",
        "phpoption/phpoption": "^1.9"
    },
    "require-dev": {
        "phpunit/phpunit": "^8.5.28 || ^9.5.21"
    },
    "autoload": {
        "psr-4": {
            "GrahamCampbell\\ResultType\\": "src/"
        }
    },
    "autoload-dev": {
        "psr-4": {
            "GrahamCampbell\\Tests\\ResultType\\": "tests/"
        }
    },
    "config": {
        "preferred-install": "dist"
    }
}
