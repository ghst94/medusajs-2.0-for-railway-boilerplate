export async function GET(req, res) {
    const query = req.scope.resolve("query");
  
    const { data } = await query.graph({
      entity: "company",
      fields: ["id", "name"],
      filters: { name: "ACME" },
    });
  
    res.json({
      companies: data,
    });
  }
  