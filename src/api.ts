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
                    const [name, description, category, shape, price] = row.split('\t')
                    return { name, description, category, shape, price: Number(price) }
                })
            })
        }
    }
}