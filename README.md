# Home assistant Sun card
Home assistant Sun card based on Google weather design

## Preview
![Light mode preview](https://user-images.githubusercontent.com/6829526/118412152-54d93900-b690-11eb-8b2b-e87b4cbcca7f.png)
![Dark mode preview](https://user-images.githubusercontent.com/6829526/118412162-64f11880-b690-11eb-9bd7-b8c6c7d8efd8.png)

## Requirements
- This card uses [Sun integration](https://www.home-assistant.io/integrations/sun/) so it needs to be enabled

## Install
### HACS
Home assistant Sun card is available by default on HACS directory. More info [here](https://hacs.xyz/).

### Manually
1. Download the `home-assistant-sun-card.js` file from the [latest release available](https://github.com/AitorDB/home-assistant-sun-card/releases) and save it in your `configuration/www` folder.
1. Go to `Configuration > Lovelace dashboard > Resources` in Home Assistant and click on `Add resource`.
    1. Add `/local/community/home-assistant-sun-card.js` to the URL.
    1. Choose `Javascript Module` as Resource type.

## Set up
### Using UI
1. Go to your dashboard, enter in edit mode and click on `Add card`, you should be able to find `Custom: Sun card` in the list.
1. Once in the UI editor you can modify the card behavior by adding some of the config that you will find below

Note: If `Custom: Sun card` doesn't appear you will have to reload cleaning the cache.

### Using YAML
1. You just need to add a new card with `type: 'custom:sun-card'` to your cards list and any of the config that you will find below if you want to customize more your card.

Note: If you get an error similar to this `Custom element doesn't exist` you will have to reload cleaning the cache.

## Config
| Name          | Accepted values      | Description                          | Default                                             |
|---------------|----------------------|--------------------------------------|-----------------------------------------------------|
| darkMode      | `boolean`            | Changes card colors to dark or light | Home assistant dark mode state                      |
| language      | `string`<sup>1</sup> | Changes card language                | Home assistant language or english if not supported |
| showAzimuth   | `boolean`            | Displays azimuth in the footer       | `false`                                             |
| showElevation | `boolean`            | Displays elevation in the footer     | `false`                                             |
| timeFormat    | `'12h'`/`'24h'`      | Displayed time format                | Locale based on Home assistant language             |
| title         | `string`             | Card title                           | Doesn't display a title by default                  |         |

(<sup>1</sup>) Supported languages: `da`, `de`, `en`, `es`, `et`, `fi`, `fr`, `hu`, `it`, `nl`, `pl`, `pt-BR`, `ru`, `sl`, `sv`

## Known issues
- Home assistant seems to provide next events instead today's one 
