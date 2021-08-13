import { Meta, Story } from "@storybook/angular";
import { ModelListComponent } from "projects/plutoz01/ngx-smart-ui/src/public-api";

interface UserModel {
  id: string;
  name: string;
}

export default {
  title: 'ngx-smart-ui/model-list',
  component: ModelListComponent
} as Meta

const UserTemplate: Story<ModelListComponent<UserModel>> = (args: ModelListComponent<UserModel>) => ({
  props: args,
  styles: {

  },
  template: `
    <sui-model-list [items]="items" [itemTpl]="itemTpl" [trackByFn]="trackByFn">
      <ng-template #itemTpl let-user>
        <div>
          <span>id:</span>
          <span>{{user.id}}</span>
        </div>
        <div>
          <span>name:</span>
          <span>{{user.name}}</span>
        </div>
      </ng-template>
    </sui-model-list>`
});

export const UserModelExample = UserTemplate.bind({});
UserModelExample.args = {
  items: [
    {
      id: 'aaaa',
      name: 'Joe Smith'
    },
    {
      id: 'bbbb',
      name: 'Rick Taylor'
    }
  ],
  trackByFn: (_, user) => user?.id
};

