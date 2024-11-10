name: CI

on:
  push:
  pull_request:

jobs:
  tests:
    name: Tests on PHP ${{ matrix.php }} ${{ matrix.dependencies }}
    runs-on: ubuntu-20.04
    container:
      image: shivammathur/node:2004
    strategy:
      matrix:
        php: ['5.6', '7.0', '7.1', '7.2', '7.3', '7.4']
        dependencies: ['', '--prefer-lowest --prefer-stable']
    steps:
      - name: Checkout
        uses: actions/checkout@v2.3.4
      - uses: shivammathur/setup-php@2.9.0
        with:
          php-version: ${{ matrix.php }}
      - name: Install dependencies
        run: composer update --no-interaction --prefer-dist ${{ matrix.dependencies }}
      - name: Configure PHPUnit problem matchers
        run: echo "::add-matcher::${{ runner.tool_cache }}/phpunit.json"
      - name: Run tests
        run: ./vendor/bin/phpunit
