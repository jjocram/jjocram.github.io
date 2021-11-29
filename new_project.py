import json

PATH_TO_JSON_FILE = "src/assets/projects.json"

last_projects = {}
new_project_flag = True
new_projects = []
tags_counter = {}

with open(PATH_TO_JSON_FILE, 'r+') as json_file:
    last_projects = json.load(json_file)
    for el in last_projects:
        for tag in el["tags"]:
            if tags_counter.get(tag):
                tags_counter[tag] += 1
            else:
                tags_counter[tag] = 1
    tags = sorted(list(map(lambda tag_key: (tag_key, tags_counter[tag_key]), tags_counter)), key=lambda tag: tag[0])
    for tag in tags:
        print(tag)


while new_project_flag:
    new_project = {}
    new_project["title"] = input("Project title: ")

    string_tags = input("Tags (separated by a comma): ")
    new_project["tags"] = [s.lstrip().rstrip() for s in string_tags.split(",")]

    paragraphs = []
    print("Paragraphs (separated by a new line): ")
    while True:
        line = input()
        if line:
            paragraphs.append(line)
        else:
            break
    new_project["paragraphs"] = paragraphs

    new_link_flag = True
    links = []
    while new_link_flag:
        new_link = {}
        new_link["name"] = input("Link name: ")
        new_link["link"] = input("Link URL: ")
        links.append(new_link)

        new_link_flag = input("Add new link? [y/n] ") == "y"
    new_project["links"] = links

    new_project_flag = input("Add new project? [y/n] ") == "y"
    new_projects.append(new_project)

projects_json = None
with open(PATH_TO_JSON_FILE, "r") as json_file:
    projects_json = json.load(json_file)

for project in new_projects:
    projects_json.append(project)

with open(PATH_TO_JSON_FILE, 'w') as json_file:
    json_file.write(json.dumps(projects_json, indent=4))
