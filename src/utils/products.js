export function getProductsFromIds(productIds, products) {
    return productIds.map(productId => products[productId])
}

export function getImageUrl(imageId, images) {
    return images[imageId]
}