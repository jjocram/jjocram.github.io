class Link {
  name: string;
  link: string;
}

class ProjectModel {
  title: string;
  tags: string[];
  paragraphs: string[];
  links: Link[];

  getId(): string {
    return this.title.toLowerCase().split(" ").join("-");
  }
}

export {ProjectModel};
