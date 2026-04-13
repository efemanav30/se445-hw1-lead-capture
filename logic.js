// Process incoming HTTP POST data and extract the content field
let results = [];

for (const item of $input.all()) {
  // Extract 'content' from the request body or provide a fallback
  let content = item.json.body?.content || "No content provided";
  
  results.push({
    json: {
      content: content,
      processedAt: new Date().toISOString()
    }
  });
}

return results;