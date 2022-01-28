list_of_externalId = ["2017-Tesla-Model-S-P90D-102.jpg","2017-Tesla-Model-3-top-view.jpg"]
list_of_imageUrl = ["https://storage.googleapis.com/labelbox-example-datasets/tesla/2017-Tesla-Model-S-P90D-102.jpg", "https://storage.googleapis.com/labelbox-example-datasets/tesla/2017-Tesla-Model-3-top-view.jpg"]


def transform_to_json_format(list_of_externalId, list_of_imageUrl):
    json_dict = {}
    new_list = []

    for x, y in list_of_externalId, list_of_imageUrl:
        json_dict["externalId"] = x
        json_dict["imageUrl"] = y
        new_list.append(json_dict)
    print(new_list)


"""
[{
    "externalId": "2017-Tesla-Model-S-P90D-102.jpg"
    "imageUrl": "https://storage.googleapis.com/labelbox-example-datasets/tesla/2017-Tesla-Model-S-P90D-102.jpg"
}, 
{
    "externalId": "https://storage.googleapis.com/labelbox-example-datasets/tesla/2017-Tesla-Model-3-top-view.jpg"
    "imageUrl": "2017-Tesla-Model-3-top-view.jpg"
}]
"""

transform_to_json_format(list_of_externalId, list_of_imageUrl)