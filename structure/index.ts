import type { StructureResolver } from 'sanity/structure';

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Base')
    .items([
    S.documentTypeListItem('page').title('Pages'),
    S.documentTypeListItem('tags').title('Tags'),
      S.listItem()
        .title('Pages By Tag')
        .child(
          S.documentTypeList('tags')
            .title('Pages by Tag')
            .child((categoryId) =>
              S.documentList()
                .apiVersion('2024-06-01')
                .title('Pages')
                .filter('_type == "pages" && $tagId in tags[]._ref')
            )
        ),
  ]);



    