import { Product } from './types'

export const api = {
    products : {
        list: async (): Promise<Product[]> => {
            const URL = process.env.SHEETS_URL as string;
            return fetch(URL, {next: {tags: ['products']}})
            .then(res => res.text())
            .then(text => {
                const rows = text.split('\n').slice(1)
                return rows.map(row => {
                    const [name, description, category, shape, price, images] = row.split('\t')
                    const imagesArray = images?.replace("\r", "").split(',')
                    return { name, description, category, shape, price: Number(price), images: imagesArray}
                })
            })
        }
    }
}