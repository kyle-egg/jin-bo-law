function Menu() {

  const cocktials = [
    { name: 'High Life', description: 'Akashi - Tai Umeshu Plum Liquor, Edmond Briotett Lychee Liquor, Zia Venetto Prosecco', price: 15.50 },
    { name: 'Just Peachy', description: 'Edmond Briotett Elderflower & Peach Liquor, Fresh Lime Juice, London Essence Peach & Jasmine soda', price: 14.50 },
    { name: 'Jin Bo Nana', description: 'Mount Gay Eclipse & Black Barrel Dark Rum, Wray & Nephew Jamaican Overproof Rum, Cointreau Orange Triple-Sec Liquor, Angostura Bitters, JBL Winter Punch Pineapple Puree', price: 14.50 },
    { name: 'Old Tokyo Fashion', description: 'Hatozaki Japanese Whiskey Infused With Cacao Nibs, Honey, Marmalade, Orange Bitters', price: 14.50 },
    { name: 'Pickled Tink', description: 'Belvedere Vodka, Edmond Briotett Fraise De Bois & Ginger Liquor, Pickled Ginger Juice, London Essence Ginger Beer', price: 14.50 },
    { name: 'CTea Diet', description: 'Botanist Gin, Edmond Briotett Hisbiscus Green Tea Liquor, Fresh Lemon Juice, Egg White', price: 14.50 },
    { name: 'Blooming Fire', description: 'Sauvelle Vodka, Fresh Passionfruit Puree, Mango Juice, Red Chilli Infused Blue Agave Nectar', price: 15.50 },
    { name: 'Tuluminati', description: 'Volcan Blanco Tequila, Mezcal Verde, Edmond Briotett Mandarin Liquor, Fresh Lime Juice, Pineapple Juice, Activated Charcoal', price: 15.50 },
    { name: 'Hot Sailor', description: 'Sailor Jerrys Spiced Rum, Edmond Briotett Fig Liquor, Organic Honey, Winter Spices, Lemon', price: 14.50 },
    { name: 'Kakuroni', description: 'Botanist Gin, Kakuzu Cherry Bitter Liquor, Antica Formula Vermouth', price: 14.50 },
    { name: 'Winter of 1738', description: 'Remy Martin 1738 cognac, Moët Chandon Brut Champagne, Antica Formula Vermouth, Dark Chocolate Bitters', price: 17.38 },
    { name: 'Expense Me', description: 'Sharing Cocktail Hennessy Vs Cognac, Moët Chandon Brut Champagne, Fresh Strawberry Puree, Lemonade, Apple Juice, Cranberry Juice', price: 18.88 }
  ]
 
  return (
    <section>
      <div id="menuhero" className="uk-background-cover uk-height-large uk-panel uk-flex uk-flex-center uk-flex-middle">      
      </div>
      <div id="homeabout" className="uk-child-width-1-1@s" uk-grid>
        <div className="lightbluecontainer">
          <div id="elevate" className="uk-background-cover uk-height-medium uk-panel uk-flex uk-flex-column uk-flex-center uk-flex-middle uk-text-center">
            <h3 id="abouttitle"className="uk-text-lead">PICK YOUR POISON</h3>
            <br></br>
            <dl className="uk-description-list">{cocktials.map(cocktail =>
              <>
                <dt className="drinkname">{cocktail.name} <span className="drinkprice">{cocktail.price}</span></dt>
                <dd className="drinkdescription">{cocktail.description}</dd>
              </>
            )}
            </dl>
          </div>
        </div>     
      </div>
    </section>
  )
}

export default Menu