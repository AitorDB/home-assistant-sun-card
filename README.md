# Homeassistant sun card
Home assistant sun card based on Google weather design

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
