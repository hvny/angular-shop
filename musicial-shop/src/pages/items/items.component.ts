import { AsyncPipe } from "@angular/common";
import {
	ChangeDetectionStrategy,
	Component,
	DestroyRef,
	inject,
	Input,
	OnDestroy,
	Output,
} from "@angular/core";
import {
	FormBuilder,
	FormGroup,
	ReactiveFormsModule,
	Validators,
} from "@angular/forms";
import { BehaviorSubject, interval, takeUntil } from "rxjs";

import { takeUntilDestroyed } from "@angular/core/rxjs-interop";

import { ItemsContainerComponent } from "../../widgets/items-container/items-container.component";
import { ItemsNavComponent } from "../../widgets/items-nav/items-nav.component";

@Component({
	selector: "app-items",
	standalone: true,
	imports:[AsyncPipe, ReactiveFormsModule, ItemsContainerComponent, ItemsNavComponent],
	templateUrl: "./items.component.html",
	styleUrl: "./items.component.css",
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemsComponent {
	private readonly _destroyRef = inject(DestroyRef);
	protected readonly counter = new BehaviorSubject<number>(0);
	form: FormGroup;

	constructor(private fb: FormBuilder) {
		this.form = this.fb.group({
			name: ["", Validators.required],
		});

		this.form.valueChanges
			.pipe(takeUntilDestroyed(this._destroyRef))
			.subscribe((v) => {
				console.log(v);
			});

		this._destroyRef.onDestroy(() => {
			this.counter.complete();
		});
	}

	changeCounter = (): void => {
		this.counter.next(this.counter.value + 1);
	};
}
