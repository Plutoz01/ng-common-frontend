import { ChangeDetectionStrategy, Component, Input, TemplateRef, TrackByFunction } from '@angular/core';
import { ModelListItemTemplateContext } from '../ModelListItemTemplateContext.model';

@Component({
  selector: 'sui-model-list',
  templateUrl: './model-list.component.html',
  styleUrls: ['./model-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModelListComponent<T> {
  @Input() items?: T[];
  @Input() itemTpl?: TemplateRef<ModelListItemTemplateContext<T>>;
  @Input() trackByFn: TrackByFunction<T> = item => item;

  get hasItems(): boolean {
    return !!this.items && this.items.length > 0;
  }

  getItemContext($implicit: T, index: number, count: number): ModelListItemTemplateContext<T> {
    return { $implicit, index, count };
  }
}
