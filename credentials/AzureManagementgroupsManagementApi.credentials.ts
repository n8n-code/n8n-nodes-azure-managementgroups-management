import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class AzureManagementgroupsManagementApi implements ICredentialType {
        name = 'N8nDevAzureManagementgroupsManagementApi';

        displayName = 'Azure Managementgroups Management API';

        icon: Icon = { light: 'file:../nodes/AzureManagementgroupsManagement/azure-managementgroups-management.png', dark: 'file:../nodes/AzureManagementgroupsManagement/azure-managementgroups-management.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: '',
                        required: true,
                        placeholder: 'https://api.example.com',
                        description: 'The base URL of your Azure Managementgroups Management API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
