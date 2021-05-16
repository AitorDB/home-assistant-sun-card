# Homeassistant sun card
Home assistant sun card based on Google weather design

## Preview
![image](https://user-images.githubusercontent.com/6829526/118412152-54d93900-b690-11eb-8b2b-e87b4cbcca7f.png)
![image](https://user-images.githubusercontent.com/6829526/118412162-64f11880-b690-11eb-9bd7-b8c6c7d8efd8.png)


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
