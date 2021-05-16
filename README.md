# Homeassistant sun card
Home assistant sun card based on Google weather design

## Preview
![image](https://user-images.githubusercontent.com/6829526/118412152-54d93900-b690-11eb-8b2b-e87b4cbcca7f.png)
![image](https://user-images.githubusercontent.com/6829526/118412162-64f11880-b690-11eb-9bd7-b8c6c7d8efd8.png)

## Install
### HACS
1. Go to `HACS > Frontend` and click on settings (3 dots in the top right corner) and click on custom repositories.
1. Add `https://github.com/AitorDB/home-assistant-sun-card` as URL and choose Lovelace as category.

### Manually
1. Download the `home-assistant-sun-card.js` file from the latest release available and save it in your `configuration/www` folder.
1. Go to `Configuration > Lovelace dashboard > Resources` in Home Assistant and click on `Add resource`.
    1. Add `/local/community/home-assistant-sun-card.js` to the URL.
    1. Choose `Javascript Module` as Resource type.
1. Go to your dashboard, enter in edit mode and click on `Add card`, you should be able to find `Custom: Sun card` in the list.

Note: If `Custom: Sun card` doesn't appear you will have to reload cleaning the cache.

## Config
| Name          | Accepted values | Description                          | Default                                             |
|---------------|-----------------|--------------------------------------|-----------------------------------------------------|
| darkMode      | `boolean`       | Changes card colors to dark or light | Home assistant dark mode state                      |
| language      | `'es'`/`'en'`   | Changes card language                | Home assistant language or english if not supported |
| showAzimuth   | `boolean`       | Displays azimuth in the footer       | `false`                                             |
| showElevation | `boolean`       | Displays elevation in the footer     | `false`                                             |
| title         | `string`        | Card title                           | Doesn't display a title by default                  |         |

## Known issues
- Home assistant seems to provide next events instead today's one 

## TODO
- [ ] Adjust styles
- [ ] Fix issue regarding next events
- [ ] Add to HACS
