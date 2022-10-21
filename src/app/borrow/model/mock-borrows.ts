import { BorrowPage } from "./BorrowPage";

export const BORROWS_DATA: BorrowPage = {
  content: [
    {
      id: 1,
      game: { id: 1, title: 'Juegos 1', age: 6, category: { id: 1, name: 'Categoria 1' }, author: { id: 1, name: 'Autor 1', nationality: 'Nacionalidad 1' } },
      customer: { id: 1, name: "Alberto" },
      startDate: new Date(2020, 10, 1),
      finishDate: new Date(2020, 10, 3)
    },
    {
      id: 2,
      game: { id: 2, title: 'Juego 2', age: 8, category: { id: 1, name: 'Categoría 1' }, author: { id: 2, name: 'Autor 2', nationality: 'Nacionalidad 2' } },
      customer: { id: 2, name: "Manuel" },
      startDate: new Date(2020, 10, 1),
      finishDate: new Date(2020, 10, 5)
    },
    {
      id: 3,
      game: { id: 1, title: 'Juegos 1', age: 6, category: { id: 1, name: 'Categoria 1' }, author: { id: 1, name: 'Autor 1', nationality: 'Nacionalidad 1' } },
      customer: { id: 3, name: "Andrés" },
      startDate: new Date(2020, 9, 4),
      finishDate: new Date(2020, 9, 10)
    },
    {
      id: 4,
      game: { id: 5, title: 'Juego 5', age: 16, category: { id: 2, name: 'Categoría 2' }, author: { id: 2, name: 'Autor 2', nationality: 'Nacionalidad 2' } },
      customer: { id: 3, name: "Andrés" },
      startDate: new Date(2020, 10, 4),
      finishDate: new Date(2020, 10, 10)
    },
    {
      id: 5,
      game: { id: 2, title: 'Juego 2', age: 8, category: { id: 1, name: 'Categoría 1' }, author: { id: 2, name: 'Autor 2', nationality: 'Nacionalidad 2' } },
      customer: { id: 4, name: "Laia" },
      startDate: new Date(2020, 0, 4),
      finishDate: new Date(2020, 0, 10)
    },
    {
      id: 6,
      game: { id: 5, title: 'Juego 5', age: 16, category: { id: 2, name: 'Categoría 2' }, author: { id: 2, name: 'Autor 2', nationality: 'Nacionalidad 2' } },
      customer: { id: 1, name: "Alberto" },
      startDate: new Date(2020, 11, 4),
      finishDate: new Date(2020, 11, 10)
    }
  ],
  pageable : {
    pageSize: 5,
    pageNumber: 0,
    sort: [
        {property: "id", direction: "ASC"}
    ]
  },
  totalElements: 6
}
