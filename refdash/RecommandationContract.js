
/**
You are working for a company where they sell millions of products online. 
Each product is represented by an unique Id. 
Their analytics systems works in a way that on each product click, 
the corresponding product id will be reported you. 
Given this stream of data, you have to generate the recommendation of top “k” clicked products.

public interface RecommendationContract {
	void initialise(int k);
	void onProductClicked(String productId);
	List<String> getTopProducts() ;
}

Time complexity:
Total unique products: n
Top Recommendation: k
Total clicks: c

**/
topProducts = []
itemClicks = {}

function onProductClicked(productId) {
    if (itemClicks.hasProperty(productId)) itemsClicks[productId] += 1
    else itemsClicks[productId] = 1
    
    const tpMatch = topProducts.filter(id => id === productId)
    if (tpMatch.length === 1) {
        topProducts[topProducts.indexOf(tpMatch)][productId] += 1
        
        // TODO: add logic to potentially change ranking of top products item
        // with slice
    }

    if (topProducts.length < k) {
        topProducts.push(itemsClicks[productId])
    }
    
    if (itemsClicks[productId] > topProducts[k][topProducts[k].name]) {
        topProducts.pop()
        topProducts.push(itemsClicks[productId])
    }
    
 
}


