import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';


export class AzureManagementgroupsManagement implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Azure Managementgroups Management',
                name: 'N8nDevAzureManagementgroupsManagement',
                icon: { light: 'file:./azure-managementgroups-management.png', dark: 'file:./azure-managementgroups-management.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'Azure Management Groups API consolidates subscriptions/resources into a hierarchy for centralized access control, policies, alerting, and reporting.',
                defaults: { name: 'Azure Managementgroups Management' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevAzureManagementgroupsManagementApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [],
			"default": ""
		},
		
                ],
        };
}
