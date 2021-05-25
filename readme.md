ui
=====

Contains various react-native ui components.

Input
----
#### Input
```tsx
<Input />
```

__Display error message__
```tsx
// string literal
<Input
  error="Plane error message"
/>

// validator function that returns error message.
const validator = (value: string) => {
  if (value === 'boo')
    return '`boo` cannot be entered.';
  return null;
};
<Input
  error={validator}
/>
```

Utility Components
----
#### Portal

```tsx
<View>
  <WarpTo name="teleport_here">
    <Text>
      Henlo World!
    </Text>
  </WarpTo>
</View>
<Portal name="teleport_here" />
```

will be rendered as:

```tsx
<View>
  <></>
</View>
<Portal name="teleport_here">
  <Text>
    Henlo World!
  </Text>
</Portal>
```

#### Debounce

```tsx
<Debounce
  property="visible"
  duration={1000}
>
  <Modal visible={visible}>
    <Text>
      Henlo World!
    </Text>
  </Modal>
</Debounce>
```

__predicate__<br/>
Only `true -> false` transitions will be debounced. <br/>
`false -> true` is immediate.
```tsx
<Debounce
  property="visible"
  duration={1000}
  predicate={x => !x}
>
</Debounce>
```