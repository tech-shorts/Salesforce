public with sharing class LWC_Util {
    
    @AuraEnabled(cacheable=true)
    public static List<Account> getAllAccounts (){
        return [SELECT Id, Name, AccountNumber, Phone, Industry, Type
                    FROM Account];
    }
    
    @AuraEnabled(cacheable=true)
    public static Account accountDetails (String accountId){
        return [SELECT Id, Name, AccountNumber, Phone, Industry, Type, AnnualRevenue
                    FROM Account
                    WHERE Id=:accountId]; 
    }
}
