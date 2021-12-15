
settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

onEvent('recipes', event => {
	event.remove({id: 'techreborn:chunk_loader'})
	event.remove({id: 'spatialharvesters:chunk_loader'})
	event.remove({id: 'kibe:chunk_loader'})
})