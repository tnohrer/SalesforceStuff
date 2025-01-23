public with sharing class Org_DataCategoryGetDescribe {
    @AuraEnabled(cacheable=true)
    public static List<DataCategoryUsage> getDataCategoryUsage() {
        Map<String, Integer> categoryUsageMap = new Map<String, Integer>();
        
        // Query to get Data Category Names
        for (Knowledge__DataCategorySelection selection : [
            SELECT DataCategoryName
            FROM Knowledge__DataCategorySelection
        ]) {
            String categoryName = selection.DataCategoryName;
            if (categoryUsageMap.containsKey(categoryName)) {
                categoryUsageMap.put(categoryName, categoryUsageMap.get(categoryName) + 1);
            } else {
                categoryUsageMap.put(categoryName, 1);
            }
        }
        
        List<DataCategoryUsage> categoryUsageList = new List<DataCategoryUsage>();
        for (String categoryName : categoryUsageMap.keySet()) {
            categoryUsageList.add(new DataCategoryUsage(categoryName, categoryUsageMap.get(categoryName)));
        }
        
        return categoryUsageList;
    }

    public class DataCategoryUsage {
        @AuraEnabled public String DataCategoryName { get; set; }
        @AuraEnabled public Integer ArticleCount { get; set; }

        public DataCategoryUsage(String dataCategoryName, Integer articleCount) {
            this.DataCategoryName = dataCategoryName;
            this.ArticleCount = articleCount;
        }
    }
}